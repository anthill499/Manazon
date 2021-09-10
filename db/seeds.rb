require 'rest-client'


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

# rm = RestClient.get "https://amazon-products1.p.rapidapi.com/search?country=US&query=Macbook%2BPro&page=1&rapidapi-key=#{ENV['API_KEY']}"
# rm_array = JSON.parse(rm)["results"]
# rm_array.each do |product| 
#   Product.create!(
#     title: product["title"],
#     description: "this works",
#     price: product["prices"]["current_price"],
#     inventory: product["reviews"]["total_reviews"],
#     rating: product["reviews"]["stars"])
# end

Product.create!(
  title: "",
  description: "",
  price: "",
  inventory: "",
  rating: ""
)
