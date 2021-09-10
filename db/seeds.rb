# require 'rest-client'
require 'open-uri'

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

product1 = Product.create!(
  title: "PAC Barbell 150-Pound Dumbbell Set with Rack, Multiple Options",
  description: "SET INCLUDES – A pair of 5-pound, 10-pound, 15-pound, 20-pound, and 25-pound rubber hex dumbbells with an A-frame dumbbell rack to store the weights. This set ships in multiple boxes.
SPACE-SAVING DESIGN – The A-frame design of this rack maximizes floor space by storing dumbbells in an “A” shape, or vertical fashion. Easily access and store dumbbells. Rubber inserts prevent dumbbells and rack from scratches
DURABLE & RELIABLE – Rack is made with steel & finished with durable black powder coat. Heads are made from ASTM A48 Class 20 grey iron and joined together by a 1018 cold rolled solid steel handle (sizes 15-120lb) with an extreme durable rubber coating.
VERSATILE – Dumbbells offer the ability to target specific muscle groups or perform a full body workout. Perfect for isolations, functional and HIIT workouts, and strength training routines
FEATURES – The original hex shaped heads prevent rolling. The medium depth knurling on the handle provides essential grip and security during use. Rubber coating is a durable and effective finish",
  price: "345.55",
  inventory: "50",
  rating: "5",
)

product2 = Product.create!(
  title: "ER KANG Multi-Function Barbell Rack, 600LBS Capacity Fitness Adjustable Dip Stand Squat Rack Dipping Station for Weight Lifting",
  description: "(600LBS Max Load) Made of 2''x2'' commercial thickness heavy-duty steel tube, all connections are equipped with fixing steel plates. KANG Barbell Rack impressively holds a max load up to 600 LBS with safe and secure. 20‘’ Super Long Protection Rod with rubber bumper strip, to keep your safe when you do bench press, deadlift, and also decrease the noise of barbell collision",
  price: "134.99",
  inventory: "100",
  rating: "5",
)

product3 = Product.create!(
  title: "Flowflex SelectTech Dumbbell",
  description: "Each dumbbell adjusts from 5 to 52.5 pounds; adjusts in 2.5-pound increments up to the first 25 pounds
Lets you rapidly switch from one exercise to the next
Combines 15 sets of weights into one, using a unique dial system
Eliminates the need for multiple dumbbells cluttering your workout space
Two year warranty on weight plates and parts",
  price: "399.00",
  inventory: "150",
  rating: "5",
)



product1.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/gymrack.png"), filename: "gymrack.png")
product2.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/squatrack.png"), filename: "squatrack.png")

# photo attachments


