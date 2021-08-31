# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Business.delete_all

demoUser = User.create!(
    username: 'demoUser',
    email: "test@example.com",
    password: 'password'
)

user1 = User.create!(
    username: 'Eldar1',
    email: "wh40@citadel.com",
    password: 'eldarornodar'
)
user2 = User.create!(
    username: 'TableTodd',
    email: "gamer@win.com",
    password: 'thetoddwins'
)
user3 = User.create!(
    username: 'Eldritch',
    email: "cthulu@theoldones.com",
    password: 'eldritchhorror'
)
user4 = User.create!(
    username: 'MarvelChamp',
    email: "drstrange@op.com",
    password: 'lcgisbest'
)
user5 = User.create!(
    username: 'hobbyist',
    email: "painter@citadel.com",
    password: 'bobrossit'
)
user6 = User.create!(
    username: 'mtgchamp',
    email: "swamp@mtg.com",
    password: 'magicthegathering'
)
user7 = User.create!(
    username: 'spacewolf',
    email: "spacewolf@citadel.com",
    password: 'awooinspace'
)
user8 = User.create!(
    username: 'AsstrumThiccitarum',
    email: "lazepew@citadel.com",
    password: 'lazerpewpew'
)
user9 = User.create!(
    username: 'ArkhamBorder',
    email: "tentacool@theoldones.com",
    password: 'eldrichaf'
)
user10 = User.create!(
    username: 'deetwenty',
    email: "daniel@dnd.com",
    password: 'bardlyfe'
)

business1 = Business.create!(
    name: "Glimpses of Wonder & Warfare",
    address: "16771 SW 12th St d",
    state: "OR",
    city: "Sherwood",
    zip_code: 97140,
    opening: 12,
    closing: 19,
    phone: 5036101208,
    website: "www.glimpsesofwonder.com",
    price_range: "$$"
)

business1.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gww1.png'),
  filename: 'gww1.png'
)
business1.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gww2.png'),
  filename: 'gww2.png'
)
business1.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gww3.png'),
  filename: 'gww3.png'
)

business2 = Business.create!(
    name: "Versus Board Games",
    address: "12551 SW Main St",
    state: "OR",
    city: "Tigard",
    zip_code: 97223,
    opening: 12,
    closing: 18,
    phone: 9713129566,
    website: "www.versusboardgames.com",
    price_range: "$$"
)

business2.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/vbg1.png'),
  filename: 'vbg1.png'
)
business2.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/vbg2.png'),
  filename: 'vbg2.png'
)
business2.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/vbg3.png'),
  filename: 'vbg3.png'
)

business3 = Business.create!(
    name: "Rune & Board",
    address: "238 SE Washington St",
    state: "OR",
    city: "Hillsboro",
    zip_code: 97123,
    opening: 12,
    closing: 20,
    phone: 5035217610,
    website: "www.runeandboard.com",
    price_range: "$" 
)

business3.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rab1.png'),
  filename: 'rab1.png'
)
business3.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rab2.png'),
  filename: 'rab2.png'
)
business3.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rab3.png'),
  filename: 'rab3.png'
)

business4 = Business.create!(
    name: "The Portland Game Store",
    address: "922 N Killingsworth St",
    state: "OR",
    city: "Portland",
    zip_code: 97217,
    opening: 11,
    closing: 19,
    phone: 5032896373,
    website: "www.theportlandgamestore.com",
    price_range: "$" 
)

business4.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/pgs1.png'),
  filename: 'pgs1.png'
)
business4.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/pgs2.png'),
  filename: 'pgs2.png'
)
business4.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/pgs3.png'),
  filename: 'pgs3.png'
)

business5 = Business.create!(
    name: "Geeks & Games",
    address: "1656 C Beavercreek Rd",
    state: "OR",
    city: "Oregon City",
    zip_code: 97045,
    opening: 10,
    closing: 21.5,
    phone: 5036505008,
    website: "www.ocgeeksandgames.com/",
    price_range: "$$$"
)

business5.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gag1.png'),
  filename: 'gag1.png'
)
business5.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gag2.png'),
  filename: 'gag2.png'
)
business5.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gag3.png'),
  filename: 'gag3.png'
)

business6 = Business.create!(
    name: "Other Worlds Games & Comics",
    address: "6350 SW Capitol Hwy",
    state: "OR",
    city: "Portland",
    zip_code: 97239,
    opening: 11,
    closing: 18,
    phone: 5032440290,
    website: "www.otherworldsgames.com",
    price_range: "$"
)

business6.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/owg1.png'),
  filename: 'owg1.png'
)
business6.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/owg2.png'),
  filename: 'owg2.png'
)
business6.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/owg3.png'),
  filename: 'owg3.png'
)

business7 = Business.create!(
    name: "Cloud Cap Games",
    address: "1226 SE Lexington St",
    state: "OR",
    city: "Portland",
    zip_code: 97202,
    opening: 11,
    closing: 19,
    phone: 5035059344,
    website: "www.cloudcapgames.com",
    price_range: "$$"
)

business7.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/ccg1.png'),
  filename: 'ccg1.png'
)
business7.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/ccg2.png'),
  filename: 'ccg2.png'
)
business7.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/ccg3.png'),
  filename: 'ccg3.png'
)

business8 = Business.create!(
    name: "Epic Gaming",
    address: "17185 SE McLoughlin Blvd suite e",
    state: "OR",
    city: "Milwaukie",
    zip_code: 97267,
    opening: 12,
    closing: 20,
    phone: 5038504756,
    website: "www.epicgamingpdx.com/",
    price_range: "$"
)

business8.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/eg1.png'),
  filename: 'eg1.png'
)
business8.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/eg2.png'),
  filename: 'eg2.png'
)
business8.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/eg3.png'),
  filename: 'eg3.png'
)

business9 = Business.create!(
    name: "Red Castle Games",
    address: "7160 SE Foster Rd",
    state: "OR",
    city: "Portland",
    zip_code: 97206,
    opening: 11,
    closing: 19,
    phone: 5034775727,
    website: "www.redcastlegames.com",
    price_range: "$$$"
)

business9.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rcg1.png'),
  filename: 'rcg1.png'
)
business9.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rcg2.png'),
  filename: 'rcg2.png'
)
business9.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/rcg3.png'),
  filename: 'rcg3.png'
)

business10 = Business.create!(
    name: "Guardian Games",
    address: "345 SE Taylor St",
    state: "OR",
    city: "Portland",
    zip_code: 97214,
    opening: 10,
    closing: 21,
    phone: 5032384000,
    website: "www.ggportland.com",
    price_range: "$$"
)

business10.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gg1.png'),
  filename: 'gg1.png'
)
business10.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gg2.png'),
  filename: 'gg2.png'
)
business10.photos.attach(
  io: open('https://tabletoppers-dev.s3.us-west-2.amazonaws.com/seed/gg3.png'),
  filename: 'gg3.png'
)