import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import InputField from "./InputField";

// Staggered animation variants for fields
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = () => {
  return (
    <section className="relative bg-zinc-950 py-24">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.08),transparent_50%)]"></div>

      <Container>
        <SectionTitle
          subtitle="Send Us A Message"
          title="Let's Start"
          highlight="Your Journey"
          description="Fill out the form below and one of our travel specialists will get back to you as soon as possible."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-md shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
              <InputField label="First Name" name="firstName" placeholder="John" />
              <InputField label="Last Name" name="lastName" placeholder="Doe" />
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2">
              <InputField label="Email Address" type="email" name="email" placeholder="john@example.com" />
              <InputField label="Phone Number" type="tel" name="phone" placeholder="+251 9XXXXXXXX" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputField label="Subject" name="subject" placeholder="How can we help you?" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <InputField textarea label="Message" name="message" placeholder="Tell us about your dream vacation..." />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:shadow-orange-500/40"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactForm;