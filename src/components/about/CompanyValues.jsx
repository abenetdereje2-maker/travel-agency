import { motion } from "framer-motion";

import values from "../../data/values";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const CompanyValues = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <SectionTitle
          subtitle="Our Principles"
          title="Core"
          highlight="Values"
          description="These values inspire every journey we create and every traveler we serve."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                {/* Background Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

                {/* Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30">
                  <Icon className="text-3xl text-white" />
                </div>

                <h3 className="relative mt-8 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="relative mt-5 leading-8 text-zinc-400">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CompanyValues;