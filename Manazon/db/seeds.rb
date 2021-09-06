
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Product.destroy_all

demoUser = User.create!(
  email: "demouser@manazon.com",
  password: "demouser123",
  username: "userdemo321",
  full_name: "Demo User")

product1 = Product.create!(
  title: "Hair Clippers",
  description: "Cordless Convenience",
  price: 49.99,
  inventory: 100,
  category_id: 1
)

product2 = Product.create!(
  title: "Beard Cream",
  description: "Best Experience Ever",
  price: 25.99,
  inventory: 75,
  category_id: 2
)



