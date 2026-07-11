import { motion } from "framer-motion";

import partners from "../../data/partners";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import PartnerCard from "./PartnerCard";

const TrustedPartners = () => {
  return (
    <section className="bg-black py-24">
      <Container><br/>
        <SectionTitle
          subtitle="Trusted Partners"
          title="Trusted By The World's"
          highlight="Best Brands"
        />
<br/>
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
            >
              <PartnerCard partner={partner} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustedPartners;