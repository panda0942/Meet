import React from 'react'
import {Text ,View ,ScrollView, SafeAreaView, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import CircleComponent from './CircleComponent'
import PostSection from './PostSection'
import { useState, useRef} from 'react';


const HomePage = ()=>{
    const data = [
        {
          "name": "Andy Kotz",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science",
          "minor": "Engineering",
          "birthday": "06-02",
          "home": "Lyme, NH",
          "quote": "\"Every day above ground is a great day, remember that\" -Pitbull",
          "favorite thing 1": "Dirt",
          "favorite thing 2": "Foco bagels",
          "favorite thing 3": "The color green",
          "favorite dartmouth tradition": "Winter Carnival",
          "fun fact": "Stratus clouds sit between 20,000 and 40,000 ft above sea level",
          "picture": "https://api.typeform.com/responses/files/0514142805285dff562c5ae6cc6b5426b285d107387ed0bc92e68ae26bd7d316/T02FQFVUX_U01FBU7HX2S_f22834b3db7e_512.png"
        },
        {
          "name": "Jaden Halevi",
          "year": "2026",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Digital Art",
          "birthday": "07-01",
          "home": "Mount Vernon, NY",
          "quote": "There has to be one cheesecake flavor I like, just ONE",
          "favorite thing 1": "My iPad",
          "favorite thing 2": "Jordan 1 Midnight Navys",
          "favorite thing 3": "SPOTIFYYYYY",
          "favorite dartmouth tradition": "Homecoming",
          "fun fact": "red pandas raise their hands when they feel threatened :( but it looks so cute",
          "picture": "https://api.typeform.com/responses/files/ceafde83d7f1e47a7694a56cd78e97047f36dd04bf2ba4ef6718c377ae081116/IMG_0126.jpg"
        },
        {
          "name": "Jorie MacDonald",
          "year": "2025",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Human Centered Design",
          "birthday": "06-22",
          "home": "San Diego, CA",
          "quote": "\u201cHow can I possibly be expected to handle school on a day like this?\u201d - Ferris Bueller",
          "favorite thing 1": "FOCO tender queso (ask me about it)",
          "favorite thing 2": "FOCO milkshake (ask me about it)",
          "favorite thing 3": "Back of the Napkin Hot Dogs",
          "favorite dartmouth tradition": "The Bonfire",
          "fun fact": "I don't eat fruit!",
          "picture": "https://api.typeform.com/responses/files/304c46d218a537ac6bb2012527c089044bd1d6fb0179b86b7960c56f54c54a63/Screenshot_2023_04_16_at_8.46.13_PM.png"
        },
        {
          "name": "Reyna Chong",
          "year": "2025",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": false,
          "major": "Sociology mod. Ling, Chinese Double Major",
          "minor": null,
          "birthday": "09-04",
          "home": "CT, USA",
          "quote": "Live and Learn",
          "favorite thing 1": "Cooking with friends (and HOTPOT!)",
          "favorite thing 2": "Photosynthesizing at the campus Penthouse",
          "favorite thing 3": "My dog, Buddy (PLEASE ask me to see a photo)",
          "favorite dartmouth tradition": "Green Key",
          "fun fact": "Trees can talk to each other!",
          "picture": "https://api.typeform.com/responses/files/3a44bfffc1fa32fc06e81ff82e0a1478acff9964d0816be47181a3da70b8c96e/Photo_on_8_22_22_at_1.53_PM__2.jpg"
        },
        {
          "name": "Grace Chen",
          "year": "2024",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": false,
          "major": "engineering sciences, music",
          "minor": null,
          "birthday": "08-27",
          "home": "Potomac, MD, United States",
          "quote": "skate sparkle shine",
          "favorite thing 1": "skating",
          "favorite thing 2": "food",
          "favorite thing 3": "friends",
          "favorite dartmouth tradition": "homecoming",
          "fun fact": "I'm a figure skater",
          "picture": "https://api.typeform.com/responses/files/d6c8fe321a639513bd3fd6f448ec4db2e8f29b138533a1f8081812d94d03cb57/FB_IMG_1480624831464.jpg"
        },
        {
          "name": "Sophie Opler",
          "year": "2024",
          "dev": false,
          "des": true,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Cognitive Science",
          "minor": "Human-Centered Design, French",
          "birthday": "11-29",
          "home": "Wilson, WY, USA",
          "quote": "\"Nothing in life is quite as important as you think it is while you\u2019re thinking about it\"--someone in my psych class",
          "favorite thing 1": "reading in my beanbag",
          "favorite thing 2": "hanging out in the sunshine with my friends",
          "favorite thing 3": "spending time in the outdoors!",
          "favorite dartmouth tradition": "Trips or Green Key",
          "fun fact": "I met Harrison Ford while working at an outdoor shop in Wyoming",
          "picture": "https://api.typeform.com/responses/files/ac7b23abd29b4a26f2b15c690c9bbca9f5b6ff2c236c236aba9eaa0278b9ac01/Sophie_Opler.png"
        },
        {
          "name": "Annie Tang",
          "year": "2025",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": false,
          "major": "Computer Science, Music",
          "minor": null,
          "birthday": "05-25",
          "home": "Troy, Michigan",
          "quote": "After the storm comes the rainbow :)",
          "favorite thing 1": "Music",
          "favorite thing 2": "Warm weather",
          "favorite thing 3": "Friends!!",
          "favorite dartmouth tradition": "Polar plunge \ud83e\udd76",
          "fun fact": "I\u2019m a synchronized swimmer!",
          "picture": "https://api.typeform.com/responses/files/8f872cf1e5b2244bacf8d493076dbb13f43e734fa70bea8a334ba1e46c1c82b2/02DA8884_ECF0_4780_92E3_D7A6FE645608.jpeg"
        },
        {
          "name": "Jordan Mann",
          "year": "2025",
          "dev": true,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Human-Centered Design",
          "birthday": "09-30",
          "home": "Larkspur, California, United States",
          "quote": "Life is a canvas, and every day is a brushstroke that adds color to our masterpiece. - gpt-3.5-turbo",
          "favorite thing 1": "Shredded Mexican cheese blend",
          "favorite thing 2": "VSCode",
          "favorite thing 3": "Temporary tattoos",
          "favorite dartmouth tradition": "The bonfire \ud83d\udd25",
          "fun fact": "I studied ballet for 13 years!",
          "picture": "https://api.typeform.com/responses/files/41002c0a778cd7a4aa27e287ca6539a9a644eb62e428b8f562eff7b8ad95232f/photo.png"
        },
        {
          "name": "Burke Jaeger",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": true,
          "major": "Computer Science",
          "minor": null,
          "birthday": "03-06",
          "home": "Cranford, New Jersey",
          "quote": "\"I live my life a quarter mile at a time.\" - Dom Toretto",
          "favorite thing 1": "Hiking Around the Upper Valley and West Coast",
          "favorite thing 2": "Cars",
          "favorite thing 3": "Food",
          "favorite dartmouth tradition": "Woccom",
          "fun fact": "I love to cook and try new foods!",
          "picture": "https://api.typeform.com/responses/files/41e5dd4c75154302ca17eef7d7004fab0fac3b1ee868566c0d77e43c4cf93175/LinkedinProfilePhoto.jpeg"
        },
        {
          "name": "Amon Ferri",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Digital Art",
          "birthday": "05-06",
          "home": "New York, New York",
          "quote": "...",
          "favorite thing 1": "Fresh pineapple",
          "favorite thing 2": "Wintermint",
          "favorite thing 3": "Sunny days",
          "favorite dartmouth tradition": "Lobster bisque",
          "fun fact": "Whales are real",
          "picture": "https://api.typeform.com/responses/files/39f37747544d2be7038e60d7637f1f4e6d587f239c4bfbc1ecf3457ff05391d6/owlbear.png"
        },
        {
          "name": "Jeff Liu",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science, Math",
          "minor": null,
          "birthday": "08-30",
          "home": "San Jose, CA, USA",
          "quote": "i don\u2019t like sand.",
          "favorite thing 1": "Collis a\u00e7a\u00ed bowls",
          "favorite thing 2": "Sleep",
          "favorite thing 3": "Bike",
          "favorite dartmouth tradition": null,
          "fun fact": null,
          "picture": "https://api.typeform.com/responses/files/ad5a2901be4d1ab0698c5b4acfd68710256cf9f170bb1e6cb1c5aae40221ab92/8A620918_E3AB_476C_8EFC_A29EE05D38C5.jpeg"
        },
        {
          "name": "Sam Blais",
          "year": "2024",
          "dev": false,
          "des": true,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "neuroscience",
          "minor": "human centered design",
          "birthday": "12-02",
          "home": "Danville, NH",
          "quote": "\"vroom vroom\" - charlie xcx",
          "favorite thing 1": "the album melodrama",
          "favorite thing 2": "bridgerton",
          "favorite thing 3": "sage green",
          "favorite dartmouth tradition": "bonfire",
          "fun fact": "i like making them up on the spot",
          "picture": "https://api.typeform.com/responses/files/d132ed6d5e64561aeb45768ae8969b5f301e8f0bb0a5915d7d4c7ef37dd73842/samanthaBlais.jpg"
        },
        {
          "name": "Pape Sow Traor\u00e9",
          "year": "GR",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": null,
          "birthday": "12-22",
          "home": "Dakar, Senegal",
          "quote": "The world belongs to those who wake up early.",
          "favorite thing 1": "Milk",
          "favorite thing 2": "Cookies",
          "favorite thing 3": "Sleep",
          "favorite dartmouth tradition": "I love them all :)",
          "fun fact": "I am trilingual lol",
          "picture": "https://api.typeform.com/responses/files/adb40da075bd85e5adfa34983bead3674dca452cf3350fa80acae9ade8738225/PapeTraore.jpg"
        },
        {
          "name": "Jasper Tucker",
          "year": "GR",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "CS + Digital Arts",
          "minor": null,
          "birthday": "02-28",
          "home": "Wherever you are bb",
          "quote": "I'm am afraid of Andy",
          "favorite thing 1": "grass",
          "favorite thing 2": "dirt",
          "favorite thing 3": "mulch",
          "favorite dartmouth tradition": "going to class",
          "fun fact": "I am, in fact, afraid of Andy",
          "picture": "https://api.typeform.com/responses/files/fa82b6a755d45c8b220b310f033c4ba0bb7822100f27150868de7eb58e2e845a/scooby.png"
        },
        {
          "name": "Samiha Datta",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science, Linguistics",
          "minor": null,
          "birthday": "01-20",
          "home": "Newton, MA",
          "quote": "\"Of course it's happening inside your head, but why on earth should that mean that it isn't real?\"",
          "favorite thing 1": "Friends",
          "favorite thing 2": "The river",
          "favorite thing 3": "Good weather",
          "favorite dartmouth tradition": "Bonfire! Lou's!",
          "fun fact": "I can dance while balancing on the rim of a brass plate.",
          "picture": "https://api.typeform.com/responses/files/88c971d81f7e08443ce343603c136b852f2fc47d7a38f45446da0e2930d2e24e/samiha_datta.jpg"
        },
        {
          "name": "Ismail Habibi",
          "year": "2024",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Philosophy Modified with Human-Centered Design",
          "minor": null,
          "birthday": "08-19",
          "home": "Nashville, TN",
          "quote": "\"Call me Ishmael\"",
          "favorite thing 1": "Reading Moby Dick",
          "favorite thing 2": "Skateboarding around campus",
          "favorite thing 3": "Warmer weather",
          "favorite dartmouth tradition": "Green key",
          "fun fact": "I almost drowned at Disney World",
          "picture": "https://api.typeform.com/responses/files/f50a87af66ab45bb57eb9b6b91911c62a93b6b4d41e897812656206f8641d3e0/IMG_20220928_143508_661__1_.jpg"
        },
        {
          "name": "Jack Macy",
          "year": "2025",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science and Economics",
          "minor": null,
          "birthday": "08-20",
          "home": "Westwood, MA",
          "quote": "Every minute I\u2019m not in a frat basement is a minute I\u2019m not finding the love of my life.",
          "favorite thing 1": "Dali",
          "favorite thing 2": "Sig Nu",
          "favorite thing 3": "Mathematics",
          "favorite dartmouth tradition": "Going to the river",
          "fun fact": "I drank from the Stanley Cup",
          "picture": "https://api.typeform.com/responses/files/d603dd01e94646e34c7d13463c6eb0be6107a8d05b322cc64f6c01acb3b50ddb/7259AE3F_BD1F_4E6F_AA02_4CDBC53D97AA.jpeg"
        },
        {
          "name": "Devon Starr",
          "year": "2025",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "CS",
          "minor": "Digital Art",
          "birthday": "03-26",
          "home": "Rye NH",
          "quote": "it is silly to cry over spilled tea, but it is just so sad",
          "favorite thing 1": "avatar the last Airbender",
          "favorite thing 2": "my ez classes",
          "favorite thing 3": "being outside",
          "favorite dartmouth tradition": "pong",
          "fun fact": "monkeys open bananas from the bottom, but you shouldn't.",
          "picture": "https://api.typeform.com/responses/files/1edfdc30acb30e8b2353b6491074cd7e4dc83da2ef7f7490c13d141a8fe52a49/image.jpg"
        },
        {
          "name": "Benedict Tedjokusumo",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science",
          "minor": null,
          "birthday": "06-28",
          "home": "San Francisco, CA",
          "quote": "To lose patience is to lose the battle",
          "favorite thing 1": "My dog. Follow her ig: corgikya",
          "favorite thing 2": "Gatorade Zero",
          "favorite thing 3": "GS Warriors",
          "favorite dartmouth tradition": "Bonfire!",
          "fun fact": "I can make solve a rubik's cube",
          "picture": "https://api.typeform.com/responses/files/bd0f0b02df3f05c4d06c6acede1586ad303dda30464503fa5038db6c565d3bb8/pp.jpeg"
        },
        {
          "name": "Yuchuan Ma",
          "year": "GR",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "CS modified with Digital Arts",
          "minor": null,
          "birthday": "02-23",
          "home": "Qingdao, China",
          "quote": "Happiness is by choice, not by chance!",
          "favorite thing 1": "Summer",
          "favorite thing 2": "Cooking good food for my friends",
          "favorite thing 3": "daily Tea->Coffee->Tea routine",
          "favorite dartmouth tradition": "Greenkey (bittersweet)",
          "fun fact": "I took out four teeth for braces, then had another four wisdom teeth...",
          "picture": "https://api.typeform.com/responses/files/2ce1d6f3a054cdc5dd36146e20991e9a82aebc16ee8250d21087dbe84a9f18a9/profile_picture.JPG"
        },
        {
          "name": "Faith Niyi-Awolesi",
          "year": "2026",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Anthropology",
          "minor": "Human-Centered Design",
          "birthday": "09-09",
          "home": "Vallejo, California",
          "quote": "\"Even miracles take a little time\" - Fairy Godmother, Cinderella",
          "favorite thing 1": "New episodes of Ted Lasso",
          "favorite thing 2": "five seconds flat -- album by Lizzy McAlpine",
          "favorite thing 3": "crocheting :)",
          "favorite dartmouth tradition": "Bonfire",
          "fun fact": "All Skittles flavors taste the same; they just have different colors and smells, which tricks our brains into thinking they taste different",
          "picture": "https://api.typeform.com/responses/files/34071650cfc5d7fc07d2eaf9447511524c9e8283c3439f04dd18a326557db4d7/Faith_Niyi_Awolesi.jpg"
        },
        {
          "name": "Alejandro Lopez",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": true,
          "major": "Computer Science",
          "minor": "Digital Art",
          "birthday": "09-07",
          "home": "Holbrook, MA, US",
          "quote": "I want to be an specialized generalist: Be very good at what I do, and master all kinds of tool to do so",
          "favorite thing 1": "Cold weather",
          "favorite thing 2": "Food that reminds me of Peru",
          "favorite thing 3": "playing games with my boys from highschool",
          "favorite dartmouth tradition": null,
          "fun fact": null,
          "picture": "https://api.typeform.com/responses/files/e7c4cfe3dd6c868624f2ab3114737a98cedd18d1922a2537dff7c8d05921a5d3/20230318_132018.jpg"
        },
        {
          "name": "Emily Chen",
          "year": "2024",
          "dev": false,
          "des": false,
          "pm": true,
          "core": true,
          "mentor": true,
          "major": "Computer Science modified with Human-Centered Design",
          "minor": null,
          "birthday": "03-14",
          "home": "Bethesda, MD",
          "quote": "I am going to make an environment that is so toxic - Sue Sylvester",
          "favorite thing 1": "Long foco dinners",
          "favorite thing 2": "Single use collis bathroom",
          "favorite thing 3": "Pickles",
          "favorite dartmouth tradition": "Sophomore summer",
          "fun fact": "Some fish can cough",
          "picture": "https://api.typeform.com/responses/files/984385007ff2543738e6277e49950bbf0816e7192f70f7d605f25ced198f0753/.Emily_Chen.jpg.icloud"
        },
        {
          "name": "Noah Yusen",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": null,
          "birthday": "06-06",
          "home": "Scarsdale, New York, United States",
          "quote": "Anyone can cook but only the fearless can be great",
          "favorite thing 1": "2023 MLB Regular Season",
          "favorite thing 2": "Succession",
          "favorite thing 3": "Warm Weather",
          "favorite dartmouth tradition": "Snowball fight",
          "fun fact": "I make a mean Beef Wellington",
          "picture": "https://api.typeform.com/responses/files/d40c9c7e3b9d4f5e11a4fd3de28af14e64af5165e5bff32d0d70c366be7a96b0/T02FQFVUX_U03N19KGPDG_2f550344c9ad_512.jpg"
        },
        {
          "name": "Maria Cristoforo",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": false,
          "major": "Computer Science, Human-Centered Design",
          "minor": null,
          "birthday": "11-23",
          "home": "Beverly, MA",
          "quote": "\"we're the youngest we're ever gonna be\" - justin chong",
          "favorite thing 1": "iced coffees",
          "favorite thing 2": "the east reading room",
          "favorite thing 3": "the free dali snacks",
          "favorite dartmouth tradition": "the snowball fight",
          "fun fact": "I can whistle through my teeth",
          "picture": "https://api.typeform.com/responses/files/fbb8bc23ea4145e46ca6ee00cda7db89afb10988760f1d1c9a85f1ce9eb5aa2c/mariacristoforo.jpeg"
        },
        {
          "name": "Daniel Carstensen",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Mathematical Data Science",
          "minor": "CS",
          "birthday": "12-20",
          "home": "Munich, Germany",
          "quote": "I need some sleep man",
          "favorite thing 1": "the weather",
          "favorite thing 2": "sleep",
          "favorite thing 3": "ramen",
          "favorite dartmouth tradition": null,
          "fun fact": null,
          "picture": "https://api.typeform.com/responses/files/755f3b2aef5807f8330459b650e02fecbad930d35cf063c00c0b5d3b4024a91d/daniel_carstensen_comp.jpg"
        },
        {
          "name": "Megan Ren",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": true,
          "major": "Computer science",
          "minor": "QSS",
          "birthday": "03-31",
          "home": "Lexington, MA",
          "quote": "Richard Donkins!",
          "favorite thing 1": "Sunshine",
          "favorite thing 2": "Earl Grey with milk",
          "favorite thing 3": "NROing a class",
          "favorite dartmouth tradition": "First year trips",
          "fun fact": "The first Star Wars movie was released before the last execution by guillotine in France",
          "picture": "https://api.typeform.com/responses/files/543ffd3ad6a29be422d87994d0ab3b8fd26ea899ef79bd24157beb115cc22078/profile.jpg"
        },
        {
          "name": "Tyler Vergho",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": true,
          "major": "Computer Science",
          "minor": "Government",
          "birthday": "08-16",
          "home": "Cupertino, CA",
          "quote": "Do or do not. There is no try.",
          "favorite thing 1": "Spring",
          "favorite thing 2": "Coffee",
          "favorite thing 3": "Music",
          "favorite dartmouth tradition": "Green Key",
          "fun fact": null,
          "picture": "https://api.typeform.com/responses/files/7392874555b2c6b9c886671785d0d89f9b8f0a968dbcaf649c29a1d8b7ef1aea/profile.jpg"
        },
        {
          "name": "Alexander Carney",
          "year": "GR",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Physics, Math, Engineering",
          "minor": null,
          "birthday": "07-23",
          "home": "Warwick, RI, USA",
          "quote": "\u201cEducation is the most powerful weapon which you can use to change the world.\u201d \u2014 Nelson Mandela",
          "favorite thing 1": "Deep philosophical conversations with DALI members",
          "favorite thing 2": "dancing",
          "favorite thing 3": "DALI",
          "favorite dartmouth tradition": "Ledyard challenge",
          "fun fact": "The longest English word is 189,819 letters long and takes over 3 hours to pronounce. It's the chemical name for the largest known protein, called \"Titin\".",
          "picture": "https://api.typeform.com/responses/files/1712e6efb0c58b4813baeb469c292cb855bddcfdbdbbed7235752f59c2b4685f/283699689_541051801024733_5989402480478921962_n.jpg"
        },
        {
          "name": "Georgia Dawahare",
          "year": "2023",
          "dev": true,
          "des": false,
          "pm": true,
          "core": true,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Neuroscience",
          "birthday": "01-26",
          "home": "Lancaster, KY",
          "quote": "\u201cShee, you guys are so unhip it\u2019s a wonder your bums don\u2019t fall off.\u201c",
          "favorite thing 1": "Audiobooks",
          "favorite thing 2": "The thought of getting paid",
          "favorite thing 3": "Nice weather",
          "favorite dartmouth tradition": "Can I say the Dartmouth 7? If not, then Lou\u2019s Challenge",
          "fun fact": "Er?",
          "picture": "https://api.typeform.com/responses/files/016ca58f57df0eeb2c4f42d63bd04b119be5c189591e49b6c0de40d5a838d497/3070C16A_8BA8_4519_9E7B_E570DD494BCB.jpeg"
        },
        {
          "name": "Julian Wu",
          "year": "GR",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Cs, Econ",
          "minor": null,
          "birthday": "04-19",
          "home": "East Greenwich, Rhode Island, USA",
          "quote": "\u201cThe darkest nights make the brightest stars\u201d",
          "favorite thing 1": "Playing tennis",
          "favorite thing 2": "Daft Punk",
          "favorite thing 3": "Going to Japan in the summer!",
          "favorite dartmouth tradition": "Homecoming",
          "fun fact": "I\u2019ve scuba-dived with sharks!",
          "picture": "https://api.typeform.com/responses/files/c50e636799c5410a68ac9f9cd70bc142c1fc45b2b6f1921b835207cce792fdbe/IMG_3599.jpeg"
        },
        {
          "name": "Kaylie Sampson",
          "year": "2025",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science",
          "minor": "Digital Arts",
          "birthday": "10-27",
          "home": "Ashland, NH",
          "quote": "you only live once",
          "favorite thing 1": "starbucks refreshers",
          "favorite thing 2": "walking outside when its sunny",
          "favorite thing 3": "my spotify playlists",
          "favorite dartmouth tradition": "green key",
          "fun fact": "i love waterskiing",
          "picture": "https://api.typeform.com/responses/files/49f1c816887f18c0f7014b39779f7bb490666912ba5963661650d7d58e5c5355/Kaylie_Sampson.jpg"
        },
        {
          "name": "Annie Qiu",
          "year": "2024",
          "dev": true,
          "des": true,
          "pm": false,
          "core": true,
          "mentor": false,
          "major": "Computer Science, Studio Art",
          "minor": "Digital Arts",
          "birthday": "07-23",
          "home": "Shanghai, China",
          "quote": "\"Oh how the tides have turned\"",
          "favorite thing 1": "matcha lattes",
          "favorite thing 2": "fruit",
          "favorite thing 3": "going on walks",
          "favorite dartmouth tradition": "Zete crawfish broil",
          "fun fact": "I eat cereal with yogurt",
          "picture": "https://api.typeform.com/responses/files/1cc7e71429f4cfdcb500b318599523bc1f74e92e230c89d1c91347db33ce761c/Screen_Shot_2023_04_12_at_7.51.24_PM.png"
        },
        {
          "name": "Jason Pak",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science, Music",
          "minor": null,
          "birthday": "10-12",
          "home": "Centreville, VA",
          "quote": "\"People say nothing is impossible, but I do nothing everyday\" -Winnie the Pooh",
          "favorite thing 1": "dali!",
          "favorite thing 2": "over easy eggs @ collis",
          "favorite thing 3": "frisbee on the green",
          "favorite dartmouth tradition": "homecoming",
          "fun fact": "7% of American adults believe that chocolate milk comes from brown cows.",
          "picture": "https://api.typeform.com/responses/files/8668b9ce54e1a47d26184cdfe8adf37b335c31bab40862d833ddf8dbdb02afc7/Screen_Shot_2021_11_27_at_6.31.15_PM.png"
        },
        {
          "name": "Jennifer Xu",
          "year": "2023",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Economics, Art History",
          "minor": "Human-Centered Design",
          "birthday": "05-27",
          "home": "Palo Alto, CS",
          "quote": "\"pikachu\" - pikachu",
          "favorite thing 1": "The Arctic Monkeys",
          "favorite thing 2": "Merry Christmas Mr. Lawrence",
          "favorite thing 3": "Fern",
          "favorite dartmouth tradition": "flitzes",
          "fun fact": "I (attempted) to learn french in my sleep",
          "picture": "https://api.typeform.com/responses/files/9366e4b346a14a9caa485abe81b6a60a3ed9392a0b30b77d80bb139cd77cb466/IMG_6022.JPG"
        },
        {
          "name": "Anna Wu",
          "year": "GR",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "MSDA",
          "minor": null,
          "birthday": "02-10",
          "home": "Newark, Delaware, US",
          "quote": "A little failure is ok while learning.",
          "favorite thing 1": "Cheesecake",
          "favorite thing 2": "Jpop music",
          "favorite thing 3": "Reading webtoons",
          "favorite dartmouth tradition": "Greenkey",
          "fun fact": "I dislocated my knee before by bumping into a table",
          "picture": "https://api.typeform.com/responses/files/852c4c508e83ad0f6d4f4f0c137cde45373bb0ed1438bc4df57910147baa3de1/image1_1__2_.jpg"
        },
        {
          "name": "Daniel Lubliner",
          "year": "2025",
          "dev": false,
          "des": true,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science, Linguistics",
          "minor": null,
          "birthday": "02-26",
          "home": "Petaluma, California, USA",
          "quote": "\u201cMemory is a strange thing. It doesn\u2019t work like I thought it did. We are so bound by time, by its order.\u201d",
          "favorite thing 1": "Walking around in the library",
          "favorite thing 2": "Walking down Main Street",
          "favorite thing 3": "Walking around Occom Pond",
          "favorite dartmouth tradition": "Green Key",
          "fun fact": "I can be seen in most photographs dating back to the industrial revolution.",
          "picture": "https://api.typeform.com/responses/files/8bfa02ef006d2a72b94b9ed9750f5db953eb06ada0ab9d59cd7bb5f9243c0606/783AD2A0_FD61_457F_A483_2E7105C27516.jpeg"
        },
        {
          "name": "Ulgen Yildirim",
          "year": "2024",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": false,
          "major": "Mechanical Engineering",
          "minor": "Women's, Gender, and Sexuality Studies",
          "birthday": "03-08",
          "home": "Istanbul, Turkiye",
          "quote": "I contend that the Queer Six rely on contrasting moments of detachments, letting go, moving away, the pleasure of discovery, and the reality that nothing is ever really permanent in order to enable themselves to move literally and figuratively through times and spaces, beyond days and rooms.",
          "favorite thing 1": "the sun being out!",
          "favorite thing 2": "exercising every day",
          "favorite thing 3": "French 79",
          "favorite dartmouth tradition": "flitzes :)",
          "fun fact": "I used to cross between the continents of Asia and Europe twice every day in high school.",
          "picture": "https://api.typeform.com/responses/files/ba9297bcedac718fc2ce98040c0aade87cc2bf22a09399370df38e2d71669bf9/IMG_0935.jpeg"
        },
        {
          "name": "Megan Liu",
          "year": "2024",
          "dev": false,
          "des": true,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "CS modified with Neuroscience",
          "minor": null,
          "birthday": "12-20",
          "home": "Collierville, TN",
          "quote": "\"If you're going to try, go all the way. Otherwise, don't even start.\" -Charles Bukowski",
          "favorite thing 1": "The Soul of an Octopus by Sy Montgomery",
          "favorite thing 2": "LSC Collections Room",
          "favorite thing 3": "Emei",
          "favorite dartmouth tradition": "bequests",
          "fun fact": "in elementary school during recess, I'd look for four leaf clovers",
          "picture": "https://api.typeform.com/responses/files/636f87ca7e821d4501f7a5c81d283d4b95d4cb931dab13d8403f002008190732/headshot.jpg"
        },
        {
          "name": "Elizabeth Frey",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": true,
          "mentor": true,
          "major": "Computer Science",
          "minor": "Neuroscience",
          "birthday": "12-27",
          "home": "Singapore, Singapore",
          "quote": "Vim is my favorite editor",
          "favorite thing 1": "Chocolate",
          "favorite thing 2": "Collis",
          "favorite thing 3": "Back of the Napkin",
          "favorite dartmouth tradition": "Snowball fight",
          "fun fact": "A crocodile cannot stick its tongue out.",
          "picture": "https://api.typeform.com/responses/files/7ce269c4ffd2d3d9d6ba0b57c052acd4f8fa4abb4560fa088abe4de1b5ca5770/ElizabethFrey.jpeg"
        },
        {
          "name": "Thomas Fenaroli",
          "year": "2024",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": false,
          "major": "Computer Science Modified with Economics",
          "minor": null,
          "birthday": "09-05",
          "home": "Greenwich, CT",
          "quote": "\u201cAnd I knew exactly what to do. But in a much more real sense, I had no idea what to do.\u201d -Michael Scott",
          "favorite thing 1": "Dali",
          "favorite thing 2": "My dog",
          "favorite thing 3": "Foco cannolis",
          "favorite dartmouth tradition": "Green Key",
          "fun fact": "I speak Swedish",
          "picture": "https://api.typeform.com/responses/files/2a210adadfd53f0586857a08991490d39508b97b5578073599c9bc594e68370b/98A6D1AD_FCEF_4518_8238_EDBAF6316930.jpeg"
        },
        {
          "name": "Marco Landicino",
          "year": "2025",
          "dev": false,
          "des": false,
          "pm": true,
          "core": false,
          "mentor": true,
          "major": "Engineering Management",
          "minor": null,
          "birthday": "04-02",
          "home": "Yorktown Heights, NY",
          "quote": "\u201cWhen you give success to stupid people, it makes them more stupid sometimes and not more intelligent.\u201d",
          "favorite thing 1": "Suits (TV show)",
          "favorite thing 2": "Friends",
          "favorite thing 3": "Family",
          "favorite dartmouth tradition": "Sophomore Summer",
          "fun fact": "I love pasta",
          "picture": "https://api.typeform.com/responses/files/71d6814e19beccfd0c31b4d552b797b9922354106e0c6817cc36b6b56167c87d/Marco_headshot.jpg"
        },
        {
          "name": "Eric Lu",
          "year": "2025",
          "dev": true,
          "des": false,
          "pm": false,
          "core": false,
          "mentor": true,
          "major": "CS",
          "minor": "Math",
          "birthday": "04-21",
          "home": "Burlington, VT",
          "quote": "Which way is the path forward? To the left where nothing is right, or to the right where nothing is left?",
          "favorite thing 1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet vehicula condimentum. Etiam quam neque, auctor a posuere eget, dignissim et massa. Aliquam erat volutpat. Maecenas sed dignissim sapien. In venenatis, turpis imperdiet lobortis gravida, nulla nisl eleifend sapien, in consectetur justo mi at tortor. Suspendisse potenti. Phasellus vehicula odio a magna ultrices vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse at interdum arcu, et sodales augue. Sed elit arcu, efficitur id ex sit amet, tincidunt porttitor dui. Morbi efficitur quam ac ligula tincidunt ultricies. Sed scelerisque viverra nisl. Phasellus mattis nulla vel ipsum ornare, sed auctor mi pharetra.  Nulla vitae bibendum neque, et aliquet odio. Aliquam tincidunt nisi ut orci placerat elementum. Sed sed tincidunt est, in iaculis diam. Phasellus consectetur velit dolor, a scelerisque odio mollis quis. Phasellus gravida ac leo a efficitur. Integer tristique dolor non egestas aliquet. Phasellus arcu justo, pretium non mi quis, viverra bibendum neque. Ut accumsan, turpis eget gravida maximus, quam est consequat mauris, aliquet posuere ligula urna non turpis. Phasellus et rutrum nisl. Suspendisse eu enim congue, pellentesque ante quis, condimentum dui. Mauris pellentesque feugiat sem, vel congue nisi pulvinar eget. Nullam tellus lorem, fringilla vitae posuere eu, egestas vel tortor. Duis sagittis rhoncus nulla ac ornare. Sed tincidunt aliquet ligula, eu dictum magna ornare et.  In pellentesque massa non molestie dictum. In luctus sem non velit vulputate auctor. Pellentesque facilisis urna eu eros consectetur, in consectetur nisl congue. Sed at turpis sem. Mauris dignissim blandit finibus. Maecenas massa dolor, laoreet ut dolor ac, suscipit tincidunt nisi. Fusce elit purus, tempor sit amet dictum ut, bibendum sit amet ipsum. Suspendisse lacinia, ipsum sit amet posuere tempor, orci eros fermentum orci, quis bibendum tortor nisl eu turpis. Suspendisse sollicitudin nec ex ut pharetra. In hac habitasse platea dictumst. Ut vel pellentesque ante. Aenean fringilla semper dui, sed accumsan ligula gravida ac.  Nam luctus pharetra nunc, aliquam mollis purus. In at ante auctor, dapibus neque vel, ornare sem. Nulla tristique, nunc ac hendrerit mattis, est nunc placerat urna, at feugiat lectus orci eget turpis. Vivamus aliquam massa nisl, a fermentum nulla convallis ac. Duis scelerisque pellentesque diam, consectetur sodales lectus bibendum ac. Nam malesuada, libero id luctus mattis, tortor sem porta purus, eget ornare nibh nisl ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Quisque dapibus tortor ac cursus sodales. Integer nec fermentum nulla, vel elementum ipsum. Nullam auctor, mi aliquet dignissim egestas, ex lorem porttitor nisl, vitae blandit nisl erat porttitor magna. Praesent non velit dictum, elementum risus in, rutrum metus. Donec gravida eleifend lacus, a ultrices velit fringilla id. Phasellus metus lacus, maximus sit amet fermentum sed, vulputate eget erat. Sed id tortor lacinia, varius lorem non, mollis felis. Vestibulum imperdiet nibh nunc, eu dignissim diam facilisis consequat.",
          "favorite thing 2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet vehicula condimentum. Etiam quam neque, auctor a posuere eget, dignissim et massa. Aliquam erat volutpat. Maecenas sed dignissim sapien. In venenatis, turpis imperdiet lobortis gravida, nulla nisl eleifend sapien, in consectetur justo mi at tortor. Suspendisse potenti. Phasellus vehicula odio a magna ultrices vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse at interdum arcu, et sodales augue. Sed elit arcu, efficitur id ex sit amet, tincidunt porttitor dui. Morbi efficitur quam ac ligula tincidunt ultricies. Sed scelerisque viverra nisl. Phasellus mattis nulla vel ipsum ornare, sed auctor mi pharetra.  Nulla vitae bibendum neque, et aliquet odio. Aliquam tincidunt nisi ut orci placerat elementum. Sed sed tincidunt est, in iaculis diam. Phasellus consectetur velit dolor, a scelerisque odio mollis quis. Phasellus gravida ac leo a efficitur. Integer tristique dolor non egestas aliquet. Phasellus arcu justo, pretium non mi quis, viverra bibendum neque. Ut accumsan, turpis eget gravida maximus, quam est consequat mauris, aliquet posuere ligula urna non turpis. Phasellus et rutrum nisl. Suspendisse eu enim congue, pellentesque ante quis, condimentum dui. Mauris pellentesque feugiat sem, vel congue nisi pulvinar eget. Nullam tellus lorem, fringilla vitae posuere eu, egestas vel tortor. Duis sagittis rhoncus nulla ac ornare. Sed tincidunt aliquet ligula, eu dictum magna ornare et.  In pellentesque massa non molestie dictum. In luctus sem non velit vulputate auctor. Pellentesque facilisis urna eu eros consectetur, in consectetur nisl congue. Sed at turpis sem. Mauris dignissim blandit finibus. Maecenas massa dolor, laoreet ut dolor ac, suscipit tincidunt nisi. Fusce elit purus, tempor sit amet dictum ut, bibendum sit amet ipsum. Suspendisse lacinia, ipsum sit amet posuere tempor, orci eros fermentum orci, quis bibendum tortor nisl eu turpis. Suspendisse sollicitudin nec ex ut pharetra. In hac habitasse platea dictumst. Ut vel pellentesque ante. Aenean fringilla semper dui, sed accumsan ligula gravida ac.  Nam luctus pharetra nunc, aliquam mollis purus. In at ante auctor, dapibus neque vel, ornare sem. Nulla tristique, nunc ac hendrerit mattis, est nunc placerat urna, at feugiat lectus orci eget turpis. Vivamus aliquam massa nisl, a fermentum nulla convallis ac. Duis scelerisque pellentesque diam, consectetur sodales lectus bibendum ac. Nam malesuada, libero id luctus mattis, tortor sem porta purus, eget ornare nibh nisl ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Quisque dapibus tortor ac cursus sodales. Integer nec fermentum nulla, vel elementum ipsum. Nullam auctor, mi aliquet dignissim egestas, ex lorem porttitor nisl, vitae blandit nisl erat porttitor magna. Praesent non velit dictum, elementum risus in, rutrum metus. Donec gravida eleifend lacus, a ultrices velit fringilla id. Phasellus metus lacus, maximus sit amet fermentum sed, vulputate eget erat. Sed id tortor lacinia, varius lorem non, mollis felis. Vestibulum imperdiet nibh nunc, eu dignissim diam facilisis consequat.",
          "favorite thing 3": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet vehicula condimentum. Etiam quam neque, auctor a posuere eget, dignissim et massa. Aliquam erat volutpat. Maecenas sed dignissim sapien. In venenatis, turpis imperdiet lobortis gravida, nulla nisl eleifend sapien, in consectetur justo mi at tortor. Suspendisse potenti. Phasellus vehicula odio a magna ultrices vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse at interdum arcu, et sodales augue. Sed elit arcu, efficitur id ex sit amet, tincidunt porttitor dui. Morbi efficitur quam ac ligula tincidunt ultricies. Sed scelerisque viverra nisl. Phasellus mattis nulla vel ipsum ornare, sed auctor mi pharetra.  Nulla vitae bibendum neque, et aliquet odio. Aliquam tincidunt nisi ut orci placerat elementum. Sed sed tincidunt est, in iaculis diam. Phasellus consectetur velit dolor, a scelerisque odio mollis quis. Phasellus gravida ac leo a efficitur. Integer tristique dolor non egestas aliquet. Phasellus arcu justo, pretium non mi quis, viverra bibendum neque. Ut accumsan, turpis eget gravida maximus, quam est consequat mauris, aliquet posuere ligula urna non turpis. Phasellus et rutrum nisl. Suspendisse eu enim congue, pellentesque ante quis, condimentum dui. Mauris pellentesque feugiat sem, vel congue nisi pulvinar eget. Nullam tellus lorem, fringilla vitae posuere eu, egestas vel tortor. Duis sagittis rhoncus nulla ac ornare. Sed tincidunt aliquet ligula, eu dictum magna ornare et.  In pellentesque massa non molestie dictum. In luctus sem non velit vulputate auctor. Pellentesque facilisis urna eu eros consectetur, in consectetur nisl congue. Sed at turpis sem. Mauris dignissim blandit finibus. Maecenas massa dolor, laoreet ut dolor ac, suscipit tincidunt nisi. Fusce elit purus, tempor sit amet dictum ut, bibendum sit amet ipsum. Suspendisse lacinia, ipsum sit amet posuere tempor, orci eros fermentum orci, quis bibendum tortor nisl eu turpis. Suspendisse sollicitudin nec ex ut pharetra. In hac habitasse platea dictumst. Ut vel pellentesque ante. Aenean fringilla semper dui, sed accumsan ligula gravida ac.  Nam luctus pharetra nunc, aliquam mollis purus. In at ante auctor, dapibus neque vel, ornare sem. Nulla tristique, nunc ac hendrerit mattis, est nunc placerat urna, at feugiat lectus orci eget turpis. Vivamus aliquam massa nisl, a fermentum nulla convallis ac. Duis scelerisque pellentesque diam, consectetur sodales lectus bibendum ac. Nam malesuada, libero id luctus mattis, tortor sem porta purus, eget ornare nibh nisl ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Quisque dapibus tortor ac cursus sodales. Integer nec fermentum nulla, vel elementum ipsum. Nullam auctor, mi aliquet dignissim egestas, ex lorem porttitor nisl, vitae blandit nisl erat porttitor magna. Praesent non velit dictum, elementum risus in, rutrum metus. Donec gravida eleifend lacus, a ultrices velit fringilla id. Phasellus metus lacus, maximus sit amet fermentum sed, vulputate eget erat. Sed id tortor lacinia, varius lorem non, mollis felis. Vestibulum imperdiet nibh nunc, eu dignissim diam facilisis consequat.",
          "favorite dartmouth tradition": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet vehicula condimentum. Etiam quam neque, auctor a posuere eget, dignissim et massa. Aliquam erat volutpat. Maecenas sed dignissim sapien. In venenatis, turpis imperdiet lobortis gravida, nulla nisl eleifend sapien, in consectetur justo mi at tortor. Suspendisse potenti. Phasellus vehicula odio a magna ultrices vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse at interdum arcu, et sodales augue. Sed elit arcu, efficitur id ex sit amet, tincidunt porttitor dui. Morbi efficitur quam ac ligula tincidunt ultricies. Sed scelerisque viverra nisl. Phasellus mattis nulla vel ipsum ornare, sed auctor mi pharetra.\n\nNulla vitae bibendum neque, et aliquet odio. Aliquam tincidunt nisi ut orci placerat elementum. Sed sed tincidunt est, in iaculis diam. Phasellus consectetur velit dolor, a scelerisque odio mollis quis. Phasellus gravida ac leo a efficitur. Integer tristique dolor non egestas aliquet. Phasellus arcu justo, pretium non mi quis, viverra bibendum neque. Ut accumsan, turpis eget gravida maximus, quam est consequat mauris, aliquet posuere ligula urna non turpis. Phasellus et rutrum nisl. Suspendisse eu enim congue, pellentesque ante quis, condimentum dui. Mauris pellentesque feugiat sem, vel congue nisi pulvinar eget. Nullam tellus lorem, fringilla vitae posuere eu, egestas vel tortor. Duis sagittis rhoncus nulla ac ornare. Sed tincidunt aliquet ligula, eu dictum magna ornare et.\n\nIn pellentesque massa non molestie dictum. In luctus sem non velit vulputate auctor. Pellentesque facilisis urna eu eros consectetur, in consectetur nisl congue. Sed at turpis sem. Mauris dignissim blandit finibus. Maecenas massa dolor, laoreet ut dolor ac, suscipit tincidunt nisi. Fusce elit purus, tempor sit amet dictum ut, bibendum sit amet ipsum. Suspendisse lacinia, ipsum sit amet posuere tempor, orci eros fermentum orci, quis bibendum tortor nisl eu turpis. Suspendisse sollicitudin nec ex ut pharetra. In hac habitasse platea dictumst. Ut vel pellentesque ante. Aenean fringilla semper dui, sed accumsan ligula gravida ac.\n\nNam luctus pharetra nunc, aliquam mollis purus. In at ante auctor, dapibus neque vel, ornare sem. Nulla tristique, nunc ac hendrerit mattis, est nunc placerat urna, at feugiat lectus orci eget turpis. Vivamus aliquam massa nisl, a fermentum nulla convallis ac. Duis scelerisque pellentesque diam, consectetur sodales lectus bibendum ac. Nam malesuada, libero id luctus mattis, tortor sem porta purus, eget ornare nibh nisl ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\nQuisque dapibus tortor ac cursus sodales. Integer nec fermentum nulla, vel elementum ipsum. Nullam auctor, mi aliquet dignissim egestas, ex lorem porttitor nisl, vitae blandit nisl erat porttitor magna. Praesent non velit dictum, elementum risus in, rutrum metus. Donec gravida eleifend lacus, a ultrices velit fringilla id. Phasellus metus lacus, maximus sit amet fermentum sed, vulputate eget erat. Sed id tortor lacinia, varius lorem non, mollis felis. Vestibulum imperdiet nibh nunc, eu dignissim diam facilisis consequat.",
          "fun fact": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet vehicula condimentum. Etiam quam neque, auctor a posuere eget, dignissim et massa. Aliquam erat volutpat. Maecenas sed dignissim sapien. In venenatis, turpis imperdiet lobortis gravida, nulla nisl eleifend sapien, in consectetur justo mi at tortor. Suspendisse potenti. Phasellus vehicula odio a magna ultrices vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse at interdum arcu, et sodales augue. Sed elit arcu, efficitur id ex sit amet, tincidunt porttitor dui. Morbi efficitur quam ac ligula tincidunt ultricies. Sed scelerisque viverra nisl. Phasellus mattis nulla vel ipsum ornare, sed auctor mi pharetra.  Nulla vitae bibendum neque, et aliquet odio. Aliquam tincidunt nisi ut orci placerat elementum. Sed sed tincidunt est, in iaculis diam. Phasellus consectetur velit dolor, a scelerisque odio mollis quis. Phasellus gravida ac leo a efficitur. Integer tristique dolor non egestas aliquet. Phasellus arcu justo, pretium non mi quis, viverra bibendum neque. Ut accumsan, turpis eget gravida maximus, quam est consequat mauris, aliquet posuere ligula urna non turpis. Phasellus et rutrum nisl. Suspendisse eu enim congue, pellentesque ante quis, condimentum dui. Mauris pellentesque feugiat sem, vel congue nisi pulvinar eget. Nullam tellus lorem, fringilla vitae posuere eu, egestas vel tortor. Duis sagittis rhoncus nulla ac ornare. Sed tincidunt aliquet ligula, eu dictum magna ornare et.  In pellentesque massa non molestie dictum. In luctus sem non velit vulputate auctor. Pellentesque facilisis urna eu eros consectetur, in consectetur nisl congue. Sed at turpis sem. Mauris dignissim blandit finibus. Maecenas massa dolor, laoreet ut dolor ac, suscipit tincidunt nisi. Fusce elit purus, tempor sit amet dictum ut, bibendum sit amet ipsum. Suspendisse lacinia, ipsum sit amet posuere tempor, orci eros fermentum orci, quis bibendum tortor nisl eu turpis. Suspendisse sollicitudin nec ex ut pharetra. In hac habitasse platea dictumst. Ut vel pellentesque ante. Aenean fringilla semper dui, sed accumsan ligula gravida ac.  Nam luctus pharetra nunc, aliquam mollis purus. In at ante auctor, dapibus neque vel, ornare sem. Nulla tristique, nunc ac hendrerit mattis, est nunc placerat urna, at feugiat lectus orci eget turpis. Vivamus aliquam massa nisl, a fermentum nulla convallis ac. Duis scelerisque pellentesque diam, consectetur sodales lectus bibendum ac. Nam malesuada, libero id luctus mattis, tortor sem porta purus, eget ornare nibh nisl ac orci. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Quisque dapibus tortor ac cursus sodales. Integer nec fermentum nulla, vel elementum ipsum. Nullam auctor, mi aliquet dignissim egestas, ex lorem porttitor nisl, vitae blandit nisl erat porttitor magna. Praesent non velit dictum, elementum risus in, rutrum metus. Donec gravida eleifend lacus, a ultrices velit fringilla id. Phasellus metus lacus, maximus sit amet fermentum sed, vulputate eget erat. Sed id tortor lacinia, varius lorem non, mollis felis. Vestibulum imperdiet nibh nunc, eu dignissim diam facilisis consequat.",
          "picture": "https://api.typeform.com/responses/files/3f41b2a6e5081008a3ccbd50db913d3da9ac3503574266f2c3cb04745dd44838/eric_lu.jpg"
        }
      ]
    
   
  const [selectedItem, setSelectedItem] = useState(null);

//   const handleCirclePress = (item) => {
//     setSelectedItem(item);
//   };

const handleCirclePress = (item, index) => {
    
    const position = index * 93.5; 
    // Scroll to the calculated position
    scrollViewRef.current?.scrollTo({ x: position , animated: true });
    verticalScrollViewRef.current?.scrollTo({ y: index * 600, animated: true });
    setSelectedItem(item);
  };


  const verticalScrollViewRef = useRef(null);

  
  const scrollViewRef = useRef(null);

    return(
    <SafeAreaView style={styles.container}>
    <View style={styles.headSection}>
     <Image
      source={require('../../meet/assets/Meet.png')}
      resizeMode="contain"
      style={styles.Image}
      />

      <TouchableOpacity>
      <Entypo name="chat" size={27} color="#26788A" />
     </TouchableOpacity>
      </View>
{/* 
      <ScrollView style={styles.HomeProfileSection}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: 'center', gap: 13, }}
      style={{borderWidth:0.5, borderTopColor: 'white', borderLeftColor: 'white', borderRightColor: 'white',borderBottomColor: 'white'}}
      horizontal={true}>
 
       {/* <CircleComponent  picture={data[0].picture} /> */}

       {/* {data.map((item, index) => (
          <CircleComponent key={index} picture={item.picture} name={item.name}    onPress={() => handleCirclePress(item)} />
        ))}
       </ScrollView> */}

      

       <ScrollView
  ref={scrollViewRef}
  style={styles.HomeProfileSection}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ justifyContent: 'center', gap: 13, }}
  horizontal={true}
>
  {data.map((item, index) => (
    <CircleComponent
      key={index}
      picture={item.picture}
      name={item.name}
      onPress={() => handleCirclePress(item, index)}
    />
  ))}

  </ScrollView>


<ScrollView showsVerticalScrollIndicator={false} ref={verticalScrollViewRef} >
  {data.map((item, index) => (
      <PostSection picture={item.picture} name={item.name} quote={item.quote}/>
  ))}
</ScrollView>




       {/* <ScrollView showsVerticalScrollIndicator={false}>
        {selectedItem && (
         {data.map((selectedItem) => (
            <PostSection picture={selectedItem.picture} name={selectedItem.name} quote={selectedItem.quote}/>
          ))}

        //   <PostSection
        //     picture={selectedItem.picture}
        //     name={selectedItem.name}
        //     quote={selectedItem.quote}
        //   />
        )}
      </ScrollView>  */}


      {/* <ScrollView  showsVerticalScrollIndicator={false}>

      {data.map((item, index) => (
          <PostSection key={index} picture={item.picture} name={item.name} quote={item.quote}/>
        ))}
      </ScrollView> */}
{/* 
<PostSection  picture={data[0].picture} name={data[0].name}  quote={data[0].quote}/> */}
     </SafeAreaView>


    )
};


const styles = StyleSheet.create({
container:{
 flex:1,
 paddingTop: 10,
backgroundColor: 'white',

},
Image: {
    height: 80,
    width: 80,
    },
    headSection:{
      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    
    },
})

export default HomePage

