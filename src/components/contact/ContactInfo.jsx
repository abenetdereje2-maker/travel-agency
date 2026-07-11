import { motion } from "framer-motion";

import contactInfo from "../../data/contactInfo";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const ContactInfo = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact"
          highlight="Information"
          description="Our team is always here to answer your questions and help you plan your next unforgettable journey."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                {/* Orange Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20"></div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30">
                  <Icon className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Main Value */}
                <p className="relative mt-4 text-lg font-semibold text-orange-500 break-words">
                  {item.value}
                </p>

                {/* Description */}
                <p className="relative mt-3 text-zinc-400 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;