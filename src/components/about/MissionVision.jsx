import { motion } from "framer-motion";
import { FaBullseye, FaRocket } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const cards = [
  {
    id: 1,
    title: "Our Mission",
    icon: FaBullseye,
    description:
      "Our mission is to inspire people to discover the world's most breathtaking destinations through exceptional service, carefully curated travel experiences, and unforgettable adventures.",
  },
  {
    id: 2,
    title: "Our Vision",
    icon: FaRocket,
    description:
      "Our vision is to become one of the world's most trusted luxury travel agencies by combining innovation, sustainability, and personalized experiences for every traveler.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <SectionTitle
          subtitle="Our Purpose"
          title="Mission"
          highlight="& Vision"
          description="Everything we do is driven by our passion for helping travelers create unforgettable memories around the world."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40"
              >
                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20"></div>

                {/* Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30">
                  <Icon className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className="relative mt-8 text-3xl font-bold text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative mt-6 leading-8 text-zinc-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;