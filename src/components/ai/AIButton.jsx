import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const AIButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300 group"
    >
      {/* Animated Pulse Rings */}
      <span className="absolute inset-0 rounded-full border border-orange-500/30 animate-ping opacity-50" />
      
      {/* Icon with subtle hover movement */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaRobot className="text-2xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      </motion.div>

      {/* Tooltip-like label (Optional - appears on hover) */}
      <span className="absolute -left-32 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Travel Assistant AI
      </span>
    </motion.button>
  );
};

export default AIButton;