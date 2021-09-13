# require 'rest-client'
require 'open-uri'

Review.destroy_all
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
  title: "PAC Barbell 150-Pound Dumbbell Set with Rack, Multiple Options",
  description: "SET INCLUDES – A pair of 5-pound, 10-pound, 15-pound, 20-pound, and 25-pound rubber hex dumbbells with an A-frame dumbbell rack to store the weights. This set ships in multiple boxes.SPACE-SAVING DESIGN – The A-frame design of this rack maximizes floor space by storing dumbbells in an “A” shape, or vertical fashion. Easily access and store dumbbells. Rubber inserts prevent dumbbells and rack from scratchesDURABLE & RELIABLE – Rack is made with steel & finished with durable black powder coat. Heads are made from ASTM A48 Class 20 grey iron and joined together by a 1018 cold rolled solid steel handle (sizes 15-120lb) with an extreme durable rubber coating.VERSATILE – Dumbbells offer the ability to target specific muscle groups or perform a full body workout. Perfect for isolations, functional and HIIT workouts, and strength training routines.FEATURES – The original hex shaped heads prevent rolling. The medium depth knurling on the handle provides essential grip and security during use. Rubber coating is a durable and effective finish",
  price: "345.55",
  inventory: "50",
  rating: "5",
)

product1.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/gymrack.png"), filename: "gymrack.png")

product2 = Product.create!(
  title: "ER KANG Multi-Function Barbell Rack, 600LBS Capacity Fitness Adjustable Dip Stand Squat Rack Dipping Station for Weight Lifting",
  description: "(600LBS Max Load) Made of 2''x2'' commercial thickness heavy-duty steel tube, all connections are equipped with fixing steel plates. KANG Barbell Rack impressively holds a max load up to 600 LBS with safe and secure. 20‘’ Super Long Protection Rod with rubber bumper strip, to keep your safe when you do bench press, deadlift, and also decrease the noise of barbell collision",
  price: "134.99",
  inventory: "100",
  rating: "5",
)
product2.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/squatrack.png"), filename: "squatrack.png")

product3 = Product.create!(
  title: "Flowflex SelectTech Dumbbell",
  description: "Each dumbbell adjusts from 5 to 52.5 pounds; adjusts in 2.5-pound increments up to the first 25 pounds Lets you rapidly switch from one exercise to the next. Combines 15 sets of weights into one, using a unique dial system. Eliminates the need for multiple dumbbells cluttering your workout space. Two year warranty on weight plates and parts",
  price: "399.99",
  inventory: "150",
  rating: "5",
)
product3.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/bowflex.png"), filename: "bowflex.png")

product4 = Product.create!(
  title: "Optimum Nutrition Gold Standard Pre-Workout, Vitamin D for Immune Support, with Creatine, Beta-Alanine, and Caffeine for Energy, Keto Friendly, 30 Servings (Packaging May Vary)",
  description: "Creatine Monohydrate (as Creapure), Beta-Alanine, L-Citrulline Malate, Natural & Artificial Flavors, Citric Acid, Malic Acid, Acetyl-L-Carnitine, N-Acetyl L-Tyrosine, Silicon Dioxide, Calcium Silicate, Caffeine (from Tea and/or Coffee), Gum Blend (Cellulose Gum, Xanthan Gum, Carrageenan), Sucralose, Citrus Bioflavonoids, Tartaric Acid, AstraGIN (Astragalus membranaceus Extract (root) & Panax notoginseng Extract (root)), Nicotinic Acid, Acesulfame Potassium, D-Calcium Pantothenate, Cholecalciferol, Thiamin HCl, Pyridoxine HCl, Folic Acid, Cyanocobalamin, FD&C Blue #1.",
  price: "17.26",
  inventory: "200",
  rating: "4",
)
product4.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/preworkout.png"), filename: "preworkout.png")
product5 = Product.create!(
  title: "VPX Bang Rtd, Black Cherry Vanilla, 16 Fl. Oz (12 Count)",
  description: "Bang energy drinks deliver a safe, sugar-free, carb-free, crash-free, great-tasting, sustained energy beverage experience.",
  price: "23.76",
  inventory: "250",
  rating: "5",
)
product5.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/bang1.png"), filename: "bang1.png")
product6 = Product.create!(
  title: "VPX Bang Rtd, Black Cherry Vanilla, 16 Fl. Oz (12 Count)",
  description: "Bang energy drinks deliver a safe, sugar-free, carb-free, crash-free, great-tasting, sustained energy beverage experience.",
  price: "23.76",
  inventory: "250",
  rating: "5",
)
product6.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/bang2.jpg"), filename: "bang2.jpg")
product7 = Product.create!(
  title: "Nike Brasilia Gym Duffel Bag",
  description: "Nike Brasilia Duffel Bag has a spacious main compartment and specialized pockets to get you through your day from gym to office and home. Handles and a shoulder strap give you carrying options.",
  price: "38.95",
  inventory: "50",
  rating: "5",
)
product7.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/nikebag.png"), filename: "nikebag.png")
product8 = Product.create!(
  title: "Men's Powerlift 4 Weightlifting Shoe",
  description: "Take your weight training sessions to new heights. Made for stability, these men's weightlifting shoes have a narrow fit, a midsole wedge and a wide instep strap for complete lockdown. A rubber outsole keeps you firmly planted when lifting. The lightweight upper is made from durable canvas.",
  price: "199.99",
  inventory: "125",
  rating: "4",
)
product8.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/shoe1.png"), filename: "shoe1.png")
product9 = Product.create!(
  title: "Gold Standard 100% Whey Protein Powder, Extreme Milk Chocolate, 5 Pound (Packaging May Vary)",
  description: "Whey Protein Isolates (WPI) are the purest form of whey protein that currently exists. By using WPI as the primary ingredient along with premium ultra-filtered whey protein concentrate (WPC) in Gold Standard 100% Whey, we're able to pack 24 grams of protein into every serving to support your muscle building needs after training.",
  price: "57.99",
  inventory: "125",
  rating: "4",
)
product9.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/protein.jpg"), filename: "protein.jpg")
product10 = Product.create!(
  title: "12/24/48 Tiles Gym Flooring Gym Mats Exercise Mat for Floor Workout Mat Foam Floor Tiles for Home Gym Equipment Garage, Black/Gray/Blue",
  description: "Made of high-density EVA foam for long-lasting and reliable performance. Exercise mats conform to the safety requirements of US CPSIA, ASTM and EU EN71-1-2-3. innhom EVA gym flooring mats are durable, long-lasting and support you a better cushion while protecting floors.",
  price: "112.92",
  inventory: "105",
  rating: "5",
)
product10.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/mats.jpg"), filename: "mats.jpg")
product11 = Product.create!(
  title: "Adjustable Folding Multifunctional Workout Station Adjustable Olympic Workout Bench with Squat Rack, Black",
  description: "BalanceFrom RS 40 Adjustable Folding Multifunctional Workout Station Adjustable Olympic Workout Bench with Squat Rack",
  price: "89.99 ",
  inventory: "15",
  rating: "5",
)
product11.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/benchpress.png"), filename: "benchpress.png")
product12 = Product.create!(
  title: "BlenderBottle Classic Shaker Bottle Perfect for Protein Shakes and Pre Workout, 28-Ounce, Black",
  description: "The BlenderBottle Classic 28-Ounce Shaker Cup makes it easy to maintain proper nutrition and hydration on-the-go. Featuring a patented mixing system—with a 316 surgical-grade stainless steel BlenderBall wire whisk (found only in BlenderBottle brand shaker cups) that moves freely inside the bottle to smooth out drink mixes and meal ingredients—it’s ideal for protein shakes, smoothies, fiber drinks, and meal replacements. It’s also a handy kitchen tool for mixing pancake batter, scrambled eggs, and salad dressings. The wide mouth makes it easy to add scoops of powdered mixes, meal ingredients, and liquids, and embossed markings show both ounces and milliliters for easy measuring anywhere (note that markings on the 28-ounce capacity shaker cup only go up to 20 ounces). Bottle contents and liquids are securely contained thanks to a tightly threaded screw-on lid that creates a leakproof seal, and a flip cap that snaps securely shut for shaking and transportation. The convenient loop top makes it easy to carry the bottle and offers a place to attach car keys while at the gym. The BlenderBottle Classic 28-Ounce Shaker Bottle can also be used as a water bottle; the ball can be left inside, as it will never rust, chip, or peel. BPA and phthalate-free, dishwasher safe..",
  price: "8.99",
  inventory: "70",
  rating: "5",
)
product12.photo.attach(io: URI.open("https://manazon-dev.s3.amazonaws.com/shakerbottle1.png"), filename: "shakerbottle1.png")

review1 = Review.create!(title: "5 out of 5", body: "Best product I have ever used, I would recommend this to anyone", rating: 5, reviewer_id: richard.id, product_id: product3.id)
review2 = Review.create!(title: "Awesome product", body: "I love the evenly distributed weights", rating: 5, reviewer_id: richard.id, product_id: product1.id)
review3 = Review.create!(title: "Awesome product", 
  body: "The squat rack is better than any of the gyms I have been to! ", 
  rating: 5, 
  reviewer_id: richard.id, 
  product_id: product2.id
)

review4 = Review.create!(title: "I love this squat rack so much haha", 
  body: " Ideal for personal training and even a home gym, this bench contributes to a variety of workouts such as bench press and squats, push-ups, dumbbell bench and more，Makes you feel like working out in a gym", 
  rating: 4, 
  reviewer_id: demoUser.id, 
  product_id: product2.id
)

review5 = Review.create!(title: "So many different weight options, i am in love!", 
  body: "I ordered mine from Manazon in August of 2013 and the set I got were manufactured with metal clips, so they are a revised version of what some people have negatively reviewed on here (which I believe were ones manufactured pre-2010). I looked at my box, which I still have and at the weights themselves and do not see a manufacture date, but I did talk with Bowflex before I ordered mine and they told me that Manazon IS an approved distributor and they reassured me that they are not selling knockoffs, mfg defects or old stuff like you might think. Just make sure if you buy them you check to see that it says Ships from and sold by Manazon.com When I bought them, they were only $249.99, so the price does vary from time to time. Hope that helps!", 
  rating: 3, 
  reviewer_id: demoUser.id, 
  product_id: product3.id
)

review6 = Review.create!(title: "Wow, very impressed!", 
  body: "Antes de decidirme a adquirir el sistema Bowflex, estuve evaluando comprar mancuernas hexagonales para incorporar varios pesos a mi kit casero de ejercicio", 
  rating: 5, 
  reviewer_id: richard.id, 
  product_id: product3.id
)

review7 = Review.create!(title: "Everything i look for in adjustable dumbbells", 
  body: "I read a lot of reviews for adjustable dumbells before deciding to get the pair of them. I had them in my cart for a while and when I saw that the price went down from $400 to $299 including delivery, I immediately bought them. I am just building up my home gym and this is a definite space saver with a small footprint.", 
  rating: 5, 
  reviewer_id: demoUser.id, 
  product_id: product3.id
)

