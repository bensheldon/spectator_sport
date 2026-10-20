class AddIndexesToSpectatorSportRecordings < ActiveRecord::Migration[7.2]
  def change
    add_index :spectator_sport_recordings, :secure_id, if_not_exists: true
    add_index :spectator_sport_recordings, :created_at, if_not_exists: true
  end
end
