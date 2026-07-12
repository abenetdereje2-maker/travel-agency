import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

const AIInput = ({ onSend, loading }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || loading) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="relative p-6 border-t border-white/5 bg-zinc-900/30 backdrop-blur-md">
      <div className="relative flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask your travel concierge..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 rounded-full border border-white/10 bg-zinc-950/50 px-6 py-4 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          disabled={loading}
          className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
            loading 
              ? "bg-zinc-800 text-zinc-500" 
              : "bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
          }`}
        >
          {loading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
              <FaSpinner />
            </motion.div>
          ) : (
            <FaPaperPlane className="ml-0.5" />
          )}
        </motion.button>
      </div>
      
      {/* Subtle footer note */}
      <p className="mt-3 text-[10px] text-center text-zinc-600 uppercase tracking-widest font-medium">
        AI-powered travel intelligence
      </p>
    </div>
  );
};

export default AIInput;