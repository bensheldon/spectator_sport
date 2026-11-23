class AddIndexesToSpectatorSportRecordings < ActiveRecord::Migration[7.2]
  disable_ddl_transaction!

  INDEX_NAME = "index_spectator_sport_recordings_on_secure_id"
  NEW_RECORDINGS_INDEX_NAME = "index_spectator_sport_recordings_on_secure_id_new"
  UNIQUE_INDEX_NAME = "index_spectator_sport_recordings_on_secure_id_unique"

  def up
    unless index_exists?(:spectator_sport_recordings, :secure_id, name: INDEX_NAME, unique: true)
      # Concurrent requests can create duplicate recordings; block new duplicates before merging existing ones
      max_id = select_value("SELECT COALESCE(MAX(id), 0) FROM spectator_sport_recordings").to_i
      add_index :spectator_sport_recordings, :secure_id, unique: true, name: NEW_RECORDINGS_INDEX_NAME, where: "id > #{max_id}",
        algorithm: index_algorithm, if_not_exists: true

      select_values(<<~SQL.squish).each { |secure_id| merge_duplicate_recordings(secure_id) }
        SELECT secure_id FROM spectator_sport_recordings GROUP BY secure_id HAVING COUNT(*) > 1
      SQL

      add_index :spectator_sport_recordings, :secure_id, unique: true, name: UNIQUE_INDEX_NAME, algorithm: index_algorithm, if_not_exists: true
      remove_index :spectator_sport_recordings, name: INDEX_NAME, algorithm: index_algorithm, if_exists: true
      rename_index :spectator_sport_recordings, UNIQUE_INDEX_NAME, INDEX_NAME
    end
    remove_index :spectator_sport_recordings, name: NEW_RECORDINGS_INDEX_NAME, algorithm: index_algorithm, if_exists: true
    add_index :spectator_sport_recordings, :created_at, algorithm: index_algorithm, if_not_exists: true
  end

  def down
    remove_index :spectator_sport_recordings, :created_at, algorithm: index_algorithm, if_exists: true
    remove_index :spectator_sport_recordings, name: INDEX_NAME, algorithm: index_algorithm, if_exists: true
  end

  private

  def index_algorithm
    :concurrently if connection.adapter_name.match?(/postg/i)
  end

  # Moves events and labels onto the oldest recording for the secure_id, then deletes the newer recordings
  def merge_duplicate_recordings(secure_id)
    transaction do
      lock_clause = " FOR UPDATE" if connection.adapter_name.match?(/postg/i)
      recording_ids = select_values(<<~SQL.squish).map(&:to_i)
        SELECT id FROM spectator_sport_recordings WHERE secure_id = #{quote(secure_id)} ORDER BY id#{lock_clause}
      SQL
      canonical_id, *duplicate_ids = recording_ids
      next if duplicate_ids.empty?

      # Keep one singular label per key: the one on the oldest recording that has it
      execute <<~SQL.squish
        DELETE FROM spectator_sport_labels
        WHERE recording_id IN (#{duplicate_ids.join(', ')})
          AND multiple = #{connection.quoted_false}
          AND key IS NOT NULL
          AND EXISTS (
            SELECT 1 FROM spectator_sport_labels l2
            WHERE l2.recording_id IN (#{recording_ids.join(', ')})
              AND l2.recording_id < spectator_sport_labels.recording_id
              AND l2.key = spectator_sport_labels.key
              AND l2.multiple = #{connection.quoted_false}
          )
      SQL
      %w[spectator_sport_events spectator_sport_labels].each do |table|
        execute "UPDATE #{table} SET recording_id = #{canonical_id} WHERE recording_id IN (#{duplicate_ids.join(', ')})"
      end
      execute "DELETE FROM spectator_sport_recordings WHERE id IN (#{duplicate_ids.join(', ')})"
    end
  end
end
