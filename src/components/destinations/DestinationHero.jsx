import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const DestinationHero = ({ search, setSearch }) => {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl px-6 text-center"
      >
        <p className="mb-4 text-orange-500 font-semibold uppercase tracking-widest">
          Discover Amazing Places
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Explore The World
        </h1>

        <p className="mt-6 text-zinc-300 text-lg leading-8">
          Discover breathtaking destinations carefully selected by our travel
          experts.
        </p>

        <div className="mt-6 text-zinc-400">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-orange-500">
            Destinations
          </span>
        </div>

        <div className="relative mt-10">
          <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-500" />

          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 py-5 pl-14 pr-6 text-white placeholder:text-zinc-400 focus:border-orange-500 outline-none"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default DestinationHero;