import paris from "../assets/images/destinations/Paris.png";
import dubai from "../assets/images/destinations/dubai.png";
import bali from "../assets/images/destinations/bali.png";
import tokyo from "../assets/images/destinations/tokio.png";
import maldives from "../assets/images/destinations/maldives.png";
import rome from "../assets/images/destinations/rome.png";

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    continent: "Europe",
    duration: "7 Days",
    price: 1800,
    rating: 4.9,
    image: paris,
    category: "Romantic",
    bestSeason: "April - October",
    description:
      "Discover the City of Love with iconic landmarks, world-class museums, luxury shopping, and unforgettable cuisine.",
    activities: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Luxury Shopping",
    ],
    included: [
      "5-Star Hotel",
      "Airport Transfer",
      "Breakfast",
      "Professional Tour Guide",
    ],
  },

  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    duration: "6 Days",
    price: 1500,
    rating: 4.8,
    image: bali,
    category: "Beach",
    bestSeason: "May - September",
    description:
      "Relax on tropical beaches, enjoy luxury resorts, explore temples, and experience Bali's unique culture.",
    activities: [
      "Beach Relaxation",
      "Temple Tours",
      "Surfing",
      "Spa Experience",
    ],
    included: [
      "Luxury Resort",
      "Airport Pickup",
      "Breakfast",
      "Private Guide",
    ],
  },

  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    continent: "Asia",
    duration: "5 Days",
    price: 2200,
    rating: 4.7,
    image: dubai,
    category: "Luxury",
    bestSeason: "November - March",
    description:
      "Experience luxury shopping, skyscrapers, desert adventures, and world-famous attractions.",
    activities: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Luxury Yacht Cruise",
    ],
    included: [
      "Luxury Hotel",
      "Airport Transfer",
      "Breakfast",
      "City Tour",
    ],
  },

  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    duration: "8 Days",
    price: 2600,
    rating: 5.0,
    image: tokyo,
    category: "Technology",
    bestSeason: "March - May",
    description:
      "Explore futuristic technology, rich culture, beautiful temples, and incredible Japanese cuisine.",
    activities: [
      "Tokyo Tower",
      "Shibuya Crossing",
      "Mt. Fuji Tour",
      "Anime District",
    ],
    included: [
      "4-Star Hotel",
      "Airport Transfer",
      "Breakfast",
      "City Pass",
    ],
  },

  {
    id: 5,
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    duration: "7 Days",
    price: 1700,
    rating: 4.6,
    image: rome,
    category: "History",
    bestSeason: "April - June",
    description:
      "Walk through ancient history while enjoying Italian food, architecture, and unforgettable experiences.",
    activities: [
      "Colosseum",
      "Vatican Museum",
      "Roman Forum",
      "Italian Food Tour",
    ],
    included: [
      "Hotel",
      "Airport Transfer",
      "Breakfast",
      "Professional Guide",
    ],
  },

  
];

export default destinations;