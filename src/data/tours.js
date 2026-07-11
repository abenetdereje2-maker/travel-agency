import switzerland from "../assets/images/tours/switzerland.png";
import maldives from "../assets/images/tours/maldives.png";
import safari from "../assets/images/tours/safari.png";

const tours = [
  {
    id: 1,
    title: "Adventure in Switzerland",
    category: "Adventure",
    image: switzerland,
    duration: "7 Days",
    guests: "2 People",
    rating: 4.9,
    oldPrice: 1299,
    price: 999,
    discount: "-20%",
  },
  {
    id: 2,
    title: "Luxury Maldives Escape",
    category: "Luxury",
    image: maldives,
    duration: "5 Days",
    guests: "2 People",
    rating: 5.0,
    oldPrice: 2499,
    price: 1999,
    discount: "-20%",
  },
  {
    id: 3,
    title: "African Safari",
    category: "Family",
    image: safari,
    duration: "8 Days",
    guests: "4 People",
    rating: 4.8,
    oldPrice: 1799,
    price: 1499,
    discount: "-15%",
  },
];

export default tours;