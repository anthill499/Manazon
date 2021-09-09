require 'rest-client'
require '../.keys.rb'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first);

User.destroy_all
Product.destroy_all

demoUser = User.create!(
  email: "demouser@manazon.com",
  password: "demouser123",
  username: "userdemo321",
  full_name: "Demo User")

richard = User.create!(
  email: "rzleu123@gmail.com",
  password: "password",
  username: "rzleu123",
  full_name: "Richard Leung")

rm = RestClient.get "https://amazon-products1.p.rapidapi.com/search?country=US&query=Macbook%2BPro&page=1&rapidapi-key=#{$api_key}"
rm_array = JSON.parse(rm)["results"]
User.destroy_all
Product.destroy_all

rm_array.each do |product| 
  Product.create!(
    title: product["title"],
    description: "this works",
    price: product["prices"]["current_price"],
    inventory: product["reviews"]["total_reviews"]  # integer
  )
end