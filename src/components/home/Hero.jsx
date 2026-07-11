import { motion } from "framer-motion";
import HeroImage from "../../assets/images/hero/travel-hero.png";
import Container from "../common/Container";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Ken-Burns effect */}
      <motion.img
        initial={{ scale: 1.2, filter: "brightness(0.6) blur(0px)" }}
        animate={{ scale: 1, filter: "brightness(0.7) blur(0px)" }}
        transition={{ duration: 12, ease: "easeOut" }}
        src={HeroImage}
        alt="Travel"
        className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Subtitle with line effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-medium tracking-[0.4em] uppercase text-xs">
              Curated Luxury Escapes
            </span>
          </motion.div>

          {/* Headline with Staggered Entrance */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-extrabold text-white tracking-tight leading-[0.9]"
          >
            Travel <br />
            <span className="relative inline-block mt-4 italic font-light text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Beyond Limits
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 text-zinc-300 text-xl max-w-lg font-light leading-relaxed"
          >
            Discover a world of bespoke journeys. We transform your wanderlust 
            into seamless, unforgettable, and ultra-luxurious reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <PrimaryButton to="/destinations" className="px-10 py-5 rounded-full text-lg shadow-2xl shadow-orange-500/20 hover:scale-105 transition-transform duration-500">
              Discover More
            </PrimaryButton>
            
            <button className="text-white font-medium flex items-center gap-3 group hover:text-orange-500 transition-colors">
              <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                <span className="block w-2 h-2 rounded-full bg-white group-hover:bg-orange-500" />
              </span>
              Watch The Film
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;