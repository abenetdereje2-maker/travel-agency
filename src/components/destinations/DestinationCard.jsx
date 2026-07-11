import { motion } from "framer-motion";
import { FaHeart, FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";
import PrimaryButton from "../common/PrimaryButton";
import { Link } from "react-router-dom";
const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
    >
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
        />

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-orange-500">
          <FaHeart />
        </button>

        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
          ${destination.price}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm text-yellow-400">
          <FaStar />
          {destination.rating}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {destination.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-zinc-400">
          <FaMapMarkerAlt className="text-orange-500" />
          {destination.country}
        </div>

        <div className="mt-2 flex items-center gap-2 text-zinc-400">
          <FaClock className="text-orange-500" />
          {destination.duration}
        </div>

        <Link to={`/destinations/${destination.id}`}>
  <PrimaryButton className="w-full">
    View Details
  </PrimaryButton>
</Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;