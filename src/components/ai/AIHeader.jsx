import { motion } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";

const AIHeader = ({ onClose }) => {
  return (
    <div className="relative px-6 py-6 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Pulsing Avatar */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-orange-500 to-orange-400 shadow-lg shadow-orange-500/20">
            <FaRobot className="text-white text-xl" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-zinc-900" />
          </div>

          <div>
            <h3 className="font-bold text-white text-lg tracking-tight">
              Concierge AI
            </h3>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                Active
              </p>
            </div>
          </div>
        </div>

        {/* Close Button with circular hover effect */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:bg-orange-500 hover:text-white transition-colors"
        >
          <FaTimes className="text-sm" />
        </motion.button>
      </div>
    </div>
  );
};

export default AIHeader;