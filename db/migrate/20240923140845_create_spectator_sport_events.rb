class CreateSpectatorSportEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :spectator_sport_events do |t|
      t.timestamps
      t.string :page_id, null: false
      t.json :event_data, null: false # TODO: jsonb for postgres ???

      t.index [:page_id, :created_at]
    end
  end
end
