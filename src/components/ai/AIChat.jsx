import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIButton from "./AIButton";
import AIHeader from "./AIHeader";
import AIInput from "./AIInput";
import MessageList from "./MessageList";
import AISuggestions from "./AISuggestions";
import { askAI } from "../../ai/groq";

const AIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to Luxe Travel! I'm your AI travel assistant. Ask me about destinations, hotels, tours, prices, or travel tips.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (message) => {
    if (!message.trim() || loading) return;
    const updatedMessages = [...messages, { sender: "user", text: message }];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const history = updatedMessages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));
      const reply = await askAI(message, history);
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "❌ Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AIButton onClick={() => setOpen(!open)} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 right-8 z-[9999] flex h-[650px] w-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/90 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

            <AIHeader onClose={() => setOpen(false)} />
            
            <div className="flex-1 overflow-hidden flex flex-col">
              <AISuggestions onSelect={handleSend} />
              <MessageList messages={messages} loading={loading} />
            </div>

            <AIInput onSend={handleSend} loading={loading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;