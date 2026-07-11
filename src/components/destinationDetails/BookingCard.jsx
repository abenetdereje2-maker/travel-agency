import { motion } from "framer-motion";
import {
  FaStar,
  FaUsers,
  FaGlobe,
  FaCalendarAlt,
  FaHeart,
  FaCheckCircle,
  FaSun,
} from "react-icons/fa";

const BookingCard = ({ destination }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className="
      sticky top-28
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-white/10
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,.5)]
    "
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8">

        <p className="text-sm uppercase tracking-[4px] text-orange-100">
          From
        </p>

        <h2 className="mt-2 text-6xl font-extrabold text-white">
          ${destination.price}
        </h2>

        <p className="mt-2 text-orange-100">
          Per Person
        </p>

      </div>

      {/* Information */}

      <div className="space-y-5 p-8">

        <InfoRow
          icon={<FaStar />}
          label="Rating"
          value={`${destination.rating} / 5`}
        />

        <InfoRow
          icon={<FaUsers />}
          label="Group Size"
          value="2 - 12"
        />

        <InfoRow
          icon={<FaGlobe />}
          label="Language"
          value="English"
        />

        <InfoRow
          icon={<FaSun />}
          label="Best Season"
          value="Spring"
        />

        <InfoRow
          icon={<FaCalendarAlt />}
          label="Availability"
          value="Every Week"
        />

      </div>

      {/* Buttons */}

      <div className="space-y-4 px-8 pb-8">

        <button
          className="
          w-full
          rounded-2xl
          bg-orange-500
          py-4
          text-lg
          font-bold
          text-white
          transition
          hover:bg-orange-600
        "
        >
          Book Now
        </button>

        <button
          className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-orange-500
          py-4
          text-orange-500
          transition
          hover:bg-orange-500
          hover:text-white
        "
        >
          <FaHeart />

          Add to Favorites
        </button>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 bg-black/30 p-8">

        <div className="space-y-4 text-sm text-zinc-300">

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-orange-500" />
            Free cancellation
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-orange-500" />
            Instant confirmation
          </div>

          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-orange-500" />
            Secure payment
          </div>

        </div>

      </div>

    </motion.div>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">

    <div className="flex items-center gap-3 text-zinc-300">

      <span className="text-orange-500">
        {icon}
      </span>

      {label}

    </div>

    <span className="font-semibold text-white">
      {value}
    </span>

  </div>
);

export default BookingCard;