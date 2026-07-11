import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDirections,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const GoogleMap = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      value: "Golagul Building, Addis Ababa, Ethiopia",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      value: "+251 911 234 567",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: "info@luxetravel.com",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Find Us"
          title="Visit Our"
          highlight="Office"
          description="Come visit our office or contact our travel experts. We are always ready to help you plan your next unforgettable adventure."
        />

        <div className="relative mt-16 pb-32">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <iframe
              title="Travel Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.5752218303946!2d38.784509973528294!3d9.015364589205292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85091bba7025%3A0xc4c052f755971a73!2sGolagul%20Building!5e1!3m2!1sen!2set!4v1783798616132!5m2!1sen!2set"
              className="h-[650px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              absolute
              left-1/2
              bottom-0
              w-[90%]
              max-w-md
              -translate-x-1/2
              translate-y-1/2
              rounded-3xl
              border
              border-white/10
              bg-black/70
              p-8
              backdrop-blur-2xl
              shadow-2xl
              shadow-orange-500/20
              lg:left-12
              lg:translate-x-0
            "
          >
            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

            <h3 className="relative text-3xl font-bold text-white">
              Visit Our Office
            </h3>

            <p className="relative mt-4 leading-7 text-zinc-400">
              We'd love to meet you in person. Visit us for personalized travel
              planning and expert advice.
            </p>

            <div className="relative mt-8 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/30">
                      <Icon className="text-white" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="text-zinc-400">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Golagul+Building+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-orange-500
                to-orange-600
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-xl
                hover:shadow-orange-500/40
              "
            >
              <FaDirections />
              Get Directions
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMap;