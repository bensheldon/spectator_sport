class CreateSpectatorSportSessionWindowTags < ActiveRecord::Migration[7.2]
  def change
    create_table :spectator_sport_session_window_tags do |t|
      t.timestamps
      t.references :session_window, null: false
      t.string :tag, null: false

      t.index [ :session_window_id, :tag ], unique: true
    end
  end
end
