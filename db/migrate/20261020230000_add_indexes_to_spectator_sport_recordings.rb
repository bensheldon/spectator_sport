class AddIndexesToSpectatorSportRecordings < ActiveRecord::Migration[7.2]
  def up
    # Merge duplicate recordings into the oldest (lowest id) recording per secure_id
    # so that a unique index can be added.
    canonical_id = <<~SQL.squish
      (SELECT MIN(r2.id) FROM spectator_sport_recordings r2
       WHERE r2.secure_id = (SELECT r1.secure_id FROM spectator_sport_recordings r1 WHERE r1.id = %{table}.recording_id))
    SQL
    duplicate_ids = <<~SQL.squish
      SELECT id FROM (
        SELECT r.id FROM spectator_sport_recordings r
        WHERE r.id > (SELECT MIN(r2.id) FROM spectator_sport_recordings r2 WHERE r2.secure_id = r.secure_id)
      ) duplicates
    SQL

    # Drop singular labels on duplicates that would collide with the canonical recording's labels
    execute <<~SQL.squish
      DELETE FROM spectator_sport_labels
      WHERE id IN (
        SELECT id FROM (
          SELECT l.id FROM spectator_sport_labels l
          WHERE l.recording_id IN (#{duplicate_ids})
            AND l.multiple = #{connection.quoted_false}
            AND l.key IS NOT NULL
            AND EXISTS (
              SELECT 1 FROM spectator_sport_labels l2
              WHERE l2.recording_id = #{format(canonical_id, table: 'l')}
                AND l2.key = l.key
                AND l2.multiple = #{connection.quoted_false}
            )
        ) conflicting
      )
    SQL

    %w[spectator_sport_events spectator_sport_labels].each do |table|
      execute <<~SQL.squish
        UPDATE #{table}
        SET recording_id = #{format(canonical_id, table: table)}
        WHERE recording_id IN (#{duplicate_ids})
      SQL
    end

    execute "DELETE FROM spectator_sport_recordings WHERE id IN (#{duplicate_ids})"

    add_index :spectator_sport_recordings, :secure_id, unique: true, if_not_exists: true
    add_index :spectator_sport_recordings, :created_at, if_not_exists: true
  end

  def down
    remove_index :spectator_sport_recordings, :created_at, if_exists: true
    remove_index :spectator_sport_recordings, :secure_id, if_exists: true
  end
end
