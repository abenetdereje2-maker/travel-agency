import { motion } from "framer-motion";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCoffee,
} from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const schedule = [
  { day: "Monday", hours: "09:00 AM - 06:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 06:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 06:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 06:00 PM" },
  { day: "Friday", hours: "09:00 AM - 06:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 04:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const BusinessHours = () => {
  return (
    <section className="bg-zinc-950 py-24">
      <Container>
        <SectionTitle
          subtitle="Visit Our Office"
          title="Business"
          highlight="Hours"
          description="We're here to help you plan unforgettable adventures. Visit us during business hours or contact us anytime."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                <FaClock className="text-xl text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Opening Hours
                </h3>

                <p className="text-zinc-400">
                  Our weekly office schedule
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-5 py-4"
                >
                  <span className="font-medium text-white">
                    {item.day}
                  </span>

                  <span
                    className={`font-semibold ${
                      item.hours === "Closed"
                        ? "text-red-400"
                        : "text-orange-500"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-500">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                <FaMapMarkerAlt className="text-xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Office Address
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Bole Road, Friendship Business Center
                <br />
                Addis Ababa
                <br />
                Ethiopia
              </p>
            </div><br/>

            {/* Emergency Contact */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-500">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                <FaPhoneAlt className="text-xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Emergency Contact
              </h3>

              <p className="mt-4 text-xl font-semibold text-orange-500">
                +251 911 234 567
              </p>

              <p className="mt-2 text-zinc-400">
                Available 24/7 for travelers during active trips.
              </p>
            </div><br/>

            {/* Walk-ins */}
            <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8 backdrop-blur-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                <FaCoffee className="text-xl text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Walk-ins Welcome
              </h3>

              <p className="mt-4 leading-8 text-zinc-300">
                Stop by our office for a complimentary travel consultation and
                enjoy a fresh cup of coffee while we help you plan your next
                unforgettable adventure.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessHours;