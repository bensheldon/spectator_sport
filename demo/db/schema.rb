# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_09_23_140845) do
  create_table "spectator_sport_events", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "session_id", null: false
    t.integer "session_window_id"
    t.json "event_data", null: false
    t.index [ "session_id", "created_at" ], name: "index_spectator_sport_events_on_session_id_and_created_at"
    t.index [ "session_id" ], name: "index_spectator_sport_events_on_session_id"
    t.index [ "session_window_id", "created_at" ], name: "idx_on_session_window_id_created_at_f1aab0a880"
    t.index [ "session_window_id" ], name: "index_spectator_sport_events_on_session_window_id"
  end

  create_table "spectator_sport_session_windows", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "session_id", null: false
    t.string "secure_id", null: false
    t.index [ "session_id" ], name: "index_spectator_sport_session_windows_on_session_id"
  end

  create_table "spectator_sport_sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "secure_id", null: false
    t.string "user_agent"
    t.string "referrer"
    t.string "remote_ip"
    t.string "landing_path"
    t.index [ "secure_id", "created_at" ], name: "index_spectator_sport_sessions_on_secure_id_and_created_at"
  end
end
