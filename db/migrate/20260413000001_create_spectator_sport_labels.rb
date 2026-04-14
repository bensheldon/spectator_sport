class CreateSpectatorSportLabels < ActiveRecord::Migration[7.2]
  def change
    create_table :spectator_sport_labels do |t|
      t.timestamps
      t.references :session_window, null: false
      t.string :key
      t.string :value, null: false
      t.boolean :multiple, null: false, default: true

      t.index [ :session_window_id, :key, :value ]
      t.index [ :key, :value ]
    end

    unless connection.adapter_name =~ /mysql/i
      add_index :spectator_sport_labels,
        [ :session_window_id, :key ],
        unique: true,
        where: "multiple = false AND key IS NOT NULL",
        name: "index_labels_unique_singular_key_per_window"
    end
  end
end
