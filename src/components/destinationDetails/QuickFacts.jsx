import { motion } from "framer-motion";
import { FaClock, FaUsers, FaGlobe, FaSun, FaHotel, FaUtensils } from "react-icons/fa";

const QuickFacts = ({ destination }) => {
  const facts = [
    { icon: <FaClock />, title: "Duration", value: destination.duration },
    { icon: <FaUsers />, title: "Group Size", value: destination.groupSize },
    { icon: <FaGlobe />, title: "Language", value: destination.language },
    { icon: <FaSun />, title: "Best Season", value: destination.bestSeason },
    { icon: <FaHotel />, title: "Hotel", value: destination.hotel || "Luxury Stay" },
    { icon: <FaUtensils />, title: "Meals", value: destination.meals || "Included" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateX: -15, y: 30 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 12 } 
    }
  };

  return (
    <section className="py-10 [perspective:1000px]">
      <h2 className="mb-10 text-4xl font-bold text-white">Quick Facts</h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {facts.map((fact) => (
          <motion.div
            key={fact.title}
            variants={itemVariants}
            // Add a subtle 3D hover tilt
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-md transition-all hover:border-orange-500/50 hover:bg-zinc-800/50"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />
            
            <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/25">
              {fact.icon}
            </div>
            
            <div className="relative z-10">
              <p className="text-zinc-400 font-medium">{fact.title}</p>
              <h3 className="mt-1 text-xl font-bold text-white">{fact.value}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default QuickFacts;