# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

Todo.create(title: "wake up", body: "do the things", done: false)
Todo.create(title: "throw confetti", body: "do the things", done: false)
Todo.create(title: "sound the fog horn", body: "do the things", done: false)
Todo.create(title: "feed the dragon", body: "do the things", done: false)
Todo.create(title: "walk the turtle", body: "do the things", done: false)
Todo.create(title: "eat goop", body: "do the things", done: false)