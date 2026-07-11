import { motion } from "framer-motion";

import destinations from "../../data/destinations";

import DestinationCard from "../destinations/DestinationCard";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const PopularDestinations = () => {
  return (
    <section className="bg-black py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ><br/>
          <SectionTitle
            subtitle="Popular Places"
            title="Popular"
            highlight="Destinations"
            
          />
        </motion.div><br/>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularDestinations;