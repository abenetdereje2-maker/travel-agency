import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import ctaBackground from "../../assets/images/about/cta-bg.png";

const CallToAction = () => {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage: `url(${ctaBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-transparent"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[6px] text-orange-500">
            Start Your Journey
          </p>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Your Next Adventure
            <br />
            Starts Here
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Explore breathtaking destinations, experience unforgettable
            adventures, and create lifelong memories with our carefully curated
            travel packages.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              to="/destinations"
              className="rounded-2xl bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600 hover:scale-105"
            >
              Explore Destinations
            </Link>

            <Link
              to="/contact"
              className="rounded-2xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-orange-500 hover:bg-orange-500"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;