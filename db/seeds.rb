# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

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
    zipCode: 97140,
    opening: 12,
    closing: 19,
    phoneNum: 5036101208,
    website: "www.glimpsesofwonder.com",
    priceRange: "$$"
)

business2 = Business.create!(
    name: "Versus Board Games",
    address: "12551 SW Main St",
    state: "OR",
    city: "Tigard",
    zipCode: 97223,
    opening: 12,
    closing: 18,
    phoneNum: 9713129566,
    website: "www.versusboardgames.com",
    priceRange: "$$"
)

business3 = Business.create!(
    name: "Rune & Board",
    address: "238 SE Washington St",
    state: "OR",
    city: "Hillsboro",
    zipCode: 97123,
    opening: 12,
    closing: 20,
    phoneNum: 5035217610,
    website: "www.runeandboard.com",
    priceRange: "$" 
)

business4 = Business.create!(
    name: "The Portland Game Store",
    address: "922 N Killingsworth St",
    state: "OR",
    city: "Portland",
    zipCode: 97217,
    opening: 11,
    closing: 19,
    phoneNum: 5032896373,
    website: "www.theportlandgamestore.com",
    priceRange: "$" 
)

business5 = Business.create!(
    name: "Geeks & Games",
    address: "1656 C Beavercreek Rd",
    state: "OR",
    city: "Oregon City",
    zipCode: 97045,
    opening: 10,
    closing: 21.5,
    phoneNum: 5036505008,
    website: "www.ocgeeksandgames.com/",
    priceRange: "$$$"
)

business6 = Business.create!(
    name: "Other Worlds Games & Comics",
    address: "6350 SW Capitol Hwy",
    state: "OR",
    city: "Portland",
    zipCode: 97239,
    opening: 11,
    closing: 18,
    phoneNum: 5032440290,
    website: "www.otherworldsgames.com",
    priceRange: "$"
)

business7 = Business.create!(
    name: "Cloud Cap Games",
    address: "1226 SE Lexington St",
    state: "OR",
    city: "Portland",
    zipCode: 97202,
    opening: 11,
    closing: 19,
    phoneNum: 5035059344,
    website: "www.cloudcapgames.com",
    priceRange: "$$"
)

business8 = Business.create!(
    name: "Epic Gaming",
    address: "17185 SE McLoughlin Blvd suite e",
    state: "OR",
    city: "Milwaukie",
    zipCode: 97267,
    opening: 12,
    closing: 20,
    phoneNum: 5038504756,
    website: "www.epicgamingpdx.com/",
    priceRange: "$"
)

business9 = Business.create!(
    name: "Red Castle Games",
    address: "7160 SE Foster Rd",
    state: "OR",
    city: "Portland",
    zipCode: 97206,
    opening: 11,
    closing: 19,
    phoneNum: 5034775727,
    website: "www.redcastlegames.com",
    priceRange: "$$$"
)

business10 = Business.create!(
    name: "Guardian Games",
    address: "345 SE Taylor St",
    state: "OR",
    city: "Portland",
    zipCode: 97214,
    opening: 10,
    closing: 21,
    phoneNum: 5032384000,
    website: "www.ggportland.com",
    priceRange: "$$"
)