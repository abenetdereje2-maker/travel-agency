import { useState } from "react";
import { motion } from "framer-motion";

const HeroGallery = ({ destination }) => {
  const [selectedImage, setSelectedImage] = useState(
    destination.gallery[0]
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">

        <motion.img
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={selectedImage}
          alt={destination.name}
          className="h-[500px] w-full rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
        />

        <div className="mt-6 grid grid-cols-4 gap-4">
          {destination.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-2xl border-2 transition ${
                selectedImage === image
                  ? "border-orange-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-28 w-full object-cover hover:scale-110 transition duration-300"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;