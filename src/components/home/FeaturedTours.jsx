import { motion } from "framer-motion";
import tours from "../../data/tours";
import TourCard from "../tours/TourCard";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const FeaturedTours = () => {
  // Container variant for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className="relative bg-zinc-950 py-32 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <SectionTitle
            subtitle="Curated Experiences"
            title="Featured"
            highlight="Tours"
            center // Ensure your SectionTitle supports this prop or adjust CSS
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {tours.map((tour) => (
            <motion.div key={tour.id} variants={itemVariants}>
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedTours;