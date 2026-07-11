import { motion } from "framer-motion";

import statistics from "../../data/statistics";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StatisticCard from "./StatisticCard";

const Statistics = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Our Achievements"
          title="Travel"
          highlight="Statistics"
          description="Our experience and dedication have helped thousands of travelers explore the world with confidence."
        />

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <StatisticCard stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Statistics;