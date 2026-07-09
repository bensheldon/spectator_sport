class AddEventTypeColumnsToSpectatorSportEvents < ActiveRecord::Migration[7.2]
  def change
    add_column :spectator_sport_events, :event_type, :string
    add_column :spectator_sport_events, :event_source, :string
  end
end
