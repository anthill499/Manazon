
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

product1 = Product.create!(
  title: "Hair Clippers",
  description: "Cordless Convenience",
  price: 49.99,
  inventory: 100);
product2 = Product.create!(
  title: "Beard Cream",
  description: "Best Experience Ever",
  price: 25.99,
  inventory: 75,)
product3 = Product.create!(
  title: "Fullstack Shaver",
  description: "One of the craziest things in the world",
  price: 45.99,
  inventory: 1000,)
product4 = Product.create!(
  title: "Black Pomade",
  description: "Amazing",
  price: 10.24,
  inventory: 1000)
product5 = Product.create!(
  title: "Fanz de Huko Hair Clay",
  description: "Best Hair business products",
  price: 9.99,
  inventory: 1000)
product6 = Product.create!(
  title: "Nose Hair Trimmer",
  description: "Nose hair",
  price: 9.99,
  inventory: 1000);

product7 = Product.create!(
  title: "Men's AM moisturizer",
  description: "Made from fresh eucalyptus leaves",
  price: 9.99,
  inventory: 500); 

product8 = Product.create!(
  title: "Men's PM moisturizer",
  description: "Made from fresh tea leaves",
  price: 12.99,
  inventory: 500); 

product9 = Product.create!(
  title: "razor blades",
  description: "Stainless steel, state of the art material",
  price: 24.99,
  inventory: 350); 

product10 = Product.create!(
  title: "hair spray",
  description: "750ml of hair spray lol",
  price: 25.99,
  inventory: 200); 