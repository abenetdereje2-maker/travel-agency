import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    title: "Phone Number",
    value: "+251 911 234 567",
    description: "Available Monday - Saturday",
    icon: FaPhoneAlt,
  },
  {
    id: 2,
    title: "Email Address",
    value: "info@luxetravel.com",
    description: "We'll reply within 24 hours",
    icon: FaEnvelope,
  },
  {
    id: 3,
    title: "Office Location",
    value: "Addis Ababa, Ethiopia",
    description: "Bole Road, Friendship Building",
    icon: FaMapMarkerAlt,
  },
  {
    id: 4,
    title: "Business Hours",
    value: "09:00 AM - 06:00 PM",
    description: "Monday - Friday",
    icon: FaClock,
  },
];

export default contactInfo;