import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import contactHero from "../../assets/images/contact/contact-hero.png";

const ContactHero = () => {
  return (
    <section
      className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactHero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[6px] text-orange-500 font-semibold"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-5xl font-extrabold text-white md:text-7xl"
        >
          We'd Love To Hear
          <br />
          From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-zinc-300"
        >
          Have questions about our destinations or travel packages?
          Our team is always ready to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-3 text-lg"
        >
          <Link
            to="/"
            className="text-white hover:text-orange-500 transition"
          >
            Home
          </Link>

          <span className="text-orange-500">/</span>

          <span className="text-orange-500 font-semibold">
            Contact
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;