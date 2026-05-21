class CreateSpectatorSportRecordings < ActiveRecord::Migration[7.2]
  def change
    create_table :spectator_sport_recordings do |t|
      t.timestamps
      t.string :secure_id, null: false
    end

    change_column_null :spectator_sport_events, :session_id, true
    add_reference :spectator_sport_events, :recording, null: true
    change_column_null :spectator_sport_labels, :session_window_id, true
    add_reference :spectator_sport_labels, :recording, null: true
    add_index :spectator_sport_labels, [ :recording_id, :key ],
      unique: true,
      where: "multiple = false AND key IS NOT NULL",
      name: "index_labels_unique_singular_key_per_recording"
  end
end
