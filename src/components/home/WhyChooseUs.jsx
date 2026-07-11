import { motion } from "framer-motion";
import features from "../../data/features";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Container><br/>
        <div className="mb-16">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Why Travelers Choose"
            highlight="TravelPro"
            // Description deleted as requested
          />
        </div><br/>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="h-full"
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;