import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";

const StatisticCard = ({ stat }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20"
    >
      <h2 className="text-5xl font-bold text-orange-500">
        <AnimatedCounter
          end={stat.number}
          suffix={stat.suffix}
        />
      </h2>

      <p className="mt-4 text-lg text-zinc-300">
        {stat.title}
      </p>
    </motion.div>
  );
};

export default StatisticCard;