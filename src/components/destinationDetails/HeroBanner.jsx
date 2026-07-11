import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const HeroBanner = ({ destination }) => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={destination.gallery[0]}
        alt={destination.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-lg uppercase tracking-[8px] text-orange-500">
            Explore {destination.country}
          </p>

          <h1 className="text-6xl font-extrabold text-white md:text-7xl">
            {destination.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-300">
            {destination.description}
          </p>

          {/* Information */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
              <FaStar className="text-orange-500" />
              <span className="text-white">
                {destination.rating}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
              <FaMapMarkerAlt className="text-orange-500" />
              <span className="text-white">
                {destination.country}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
              <FaClock className="text-orange-500" />
              <span className="text-white">
                {destination.duration}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md">
              <FaUsers className="text-orange-500" />
              <span className="text-white">
                2 - 12 Travelers
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;