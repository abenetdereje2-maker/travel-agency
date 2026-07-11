import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import aboutHero from "../../assets/images/about/about-hero.png";

const AboutHero = () => {
  return (
    <section
      className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutHero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-[6px] text-orange-500"
        >
          About Our Company
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-5xl font-extrabold text-white md:text-7xl"
        >
          Discover Our Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300"
        >
          We create unforgettable travel experiences that inspire adventure,
          luxury, and lifelong memories for travelers around the globe.
        </motion.p>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-3 text-lg"
        >
          <Link
            to="/"
            className="text-white transition hover:text-orange-500"
          >
            Home
          </Link>

          <span className="text-orange-500">/</span>

          <span className="font-semibold text-orange-500">
            About
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;