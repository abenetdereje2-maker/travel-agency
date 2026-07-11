import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import team from "../../data/team";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const TeamSection = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Meet Our Team"
          title="Our Travel"
          highlight="Experts"
          description="Our passionate travel specialists are dedicated to creating unforgettable journeys and delivering exceptional experiences."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 transition group-hover:opacity-100" />

              {/* Profile Image */}
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-orange-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-2xl font-bold text-white">
                {member.name}
              </h3>

              {/* Position */}
              <p className="mt-2 text-orange-500">
                {member.position}
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href={member.facebook}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={member.instagram}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                >
                  <FaInstagram />
                </a>

                <a
                  href={member.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;