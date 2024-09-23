class CreateSpectatorSportEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :spectator_sport_sessions do |t|
      t.timestamps
      t.string :secure_id, null: false

      t.index [ :secure_id, :created_at ]
    end

    create_table :spectator_sport_session_windows do |t|
      t.timestamps
      t.references :session, null: false
      t.string :secure_id, null: false
    end

    create_table :spectator_sport_events do |t|
      t.timestamps
      t.references :session, null: false
      t.references :session_window, null: true
      t.json :event_data, null: false # TODO: jsonb for postgres ???

      t.index [ :session_id, :created_at ]
      t.index [ :session_window_id, :created_at ]
    end
  end
end
