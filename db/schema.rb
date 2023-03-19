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

ActiveRecord::Schema.define(version: 2023_03_17_220638) do

  create_table "matches", force: :cascade do |t|
    t.integer "game"
    t.string "home_team"
    t.string "away_team"
    t.integer "home_score"
    t.integer "away_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "hometeam_img_url"
    t.string "awayteam_img_url"
  end

  create_table "opinions", force: :cascade do |t|
    t.string "comment"
    t.integer "user_id"
    t.integer "match_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["match_id"], name: "index_opinions_on_match_id"
    t.index ["user_id"], name: "index_opinions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.integer "age"
    t.string "location"
    t.string "favorite_club"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  add_foreign_key "opinions", "matches"
  add_foreign_key "opinions", "users"
end
