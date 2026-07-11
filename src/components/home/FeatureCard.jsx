import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  
  // Magnetic Tilt Logic
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 15); // Adjust multiplier for tilt strength
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: y, rotateY: x, transformStyle: "preserve-3d" }}
      className="group relative h-full rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-1 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/50"
    >
      {/* Glow Effect Layer */}
      <div className="absolute inset-0 rounded-[2.4rem] bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full rounded-[2.4rem] bg-zinc-950 p-8 flex flex-col items-start shadow-inner">
        {/* Icon Container with Floating Effect */}
        <motion.div 
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-zinc-900 border border-white/5 text-3xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon />
        </motion.div>

        <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">
          {feature.title}
        </h3>

        <p className="leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
          {feature.description}
        </p>
        
        {/* Decorative Element */}
        <div className="mt-8 h-1 w-12 bg-zinc-800 rounded-full group-hover:bg-orange-500 transition-colors duration-500" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;