import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PrimaryButton from "../common/PrimaryButton";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    toast.success("Thanks for subscribing!");

    setEmail("");
  };

  return (
    <section className="bg-black py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md"
        >
          <SectionTitle
            subtitle="Newsletter"
            title="Stay"
            highlight="Updated"
            description="Subscribe to receive exclusive travel offers, destination guides, and the latest news."
          />

          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 md:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-white/10 bg-zinc-900 px-6 py-4 text-white outline-none focus:border-orange-500"
            />

            <PrimaryButton type="submit">
              Subscribe
            </PrimaryButton>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;