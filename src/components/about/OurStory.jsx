import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaPlaneDeparture,
  FaGlobe,
} from "react-icons/fa";

import ourStoryImage from "../../assets/images/about/our-story.png";

const features = [
  "Trusted by thousands of travelers",
  "Award-winning travel experts",
  "Personalized luxury experiences",
];

const OurStory = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={ourStoryImage}
            alt="Our Story"
            className="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
          />

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute -bottom-8 -right-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold text-orange-500">
              15+
            </h2>

            <p className="mt-2 text-lg text-white">
              Years Experience
            </p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold uppercase tracking-[5px] text-orange-500">
            Our Story
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white leading-tight">
            Creating unforgettable journeys for every traveler.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Since 2010, we have helped thousands of travelers discover
            breathtaking destinations across the globe. Our mission is to
            combine luxury, adventure, and personalized service into every
            journey we create.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-2xl text-orange-500" />

                <span className="text-lg text-zinc-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Mini Statistics */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <FaPlaneDeparture className="text-3xl text-orange-500" />

              <h3 className="mt-4 text-3xl font-bold text-white">
                500+
              </h3>

              <p className="text-zinc-400">
                Premium Tours
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <FaGlobe className="text-3xl text-orange-500" />

              <h3 className="mt-4 text-3xl font-bold text-white">
                120+
              </h3>

              <p className="text-zinc-400">
                Destinations
              </p>
            </div>
          </div>

          <button className="mt-12 rounded-2xl bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition hover:bg-orange-600">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;