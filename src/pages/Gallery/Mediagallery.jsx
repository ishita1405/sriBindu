import React from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../../assets/Gallery/Media1.jpg";
import img2 from "../../assets/Gallery/Media2.jpg";
import img3 from "../../assets/Gallery/Media3.jpg";
import img4 from "../../assets/Gallery/Media4.jpg";
import img5 from "../../assets/Gallery/Media5.jpg";
import img6 from "../../assets/Gallery/Media6.jpg";
import img7 from "../../assets/Gallery/Media7.jpg";
import img8 from "../../assets/Gallery/Media8.jpg";
import img9 from "../../assets/Gallery/Media9.jpg";
import img10 from "../../assets/Gallery/Media10.jpg";
import img11 from "../../assets/Gallery/Media11.jpg";
import img12 from "../../assets/Gallery/Media12.jpg";
import img13 from "../../assets/Gallery/Media13.jpg";
import img14 from "../../assets/Gallery/Media14.jpg";
import img15 from "../../assets/Gallery/Media15.jpg";
import img16 from "../../assets/Gallery/Media16.jpg";
import img17 from "../../assets/Gallery/Media17.jpg";
import img18 from "../../assets/Gallery/Media18.jpg";
import img19 from "../../assets/Gallery/Media19.jpg";
import img20 from "../../assets/Gallery/Media20.jpg";
import img21 from "../../assets/Gallery/Media21.jpg";
import img22 from "../../assets/Gallery/Media22.jpg";
import img23 from "../../assets/Gallery/Media23.jpg";
import img24 from "../../assets/Gallery/Media25.jpg";
import img25 from "../../assets/Gallery/Media25.jpg";
import img26 from "../../assets/Gallery/Media26.jpg";
import img27 from "../../assets/Gallery/Media27.jpg";
import img28 from "../../assets/Gallery/Media28.jpg";
import img29 from "../../assets/Gallery/Media29.jpg";
import img30 from "../../assets/Gallery/Media30.jpg";
import img31 from "../../assets/Gallery/Media31.jpg";
import img32 from "../../assets/Gallery/Media32.jpg";
import img33 from "../../assets/Gallery/Media33.jpg";
import img34 from "../../assets/Gallery/Media34.jpg";
import img35 from "../../assets/Gallery/Media35.jpg";
import img36 from "../../assets/Gallery/Media36.jpg";
import img37 from "../../assets/Gallery/Media37.jpg";
import img38 from "../../assets/Gallery/Media38.jpg";
import img39 from "../../assets/Gallery/Media39.jpg";
import img40 from "../../assets/Gallery/Media40.jpg";
import img41 from "../../assets/Gallery/Media41.jpg";
import img42 from "../../assets/Gallery/Media42.jpg";
import img43 from "../../assets/Gallery/Media43.jpg";
import img44 from "../../assets/Gallery/Media44.jpg";
import img45 from "../../assets/Gallery/Media45.jpg";

const images = [
  img1, img2, img3,img4, img5, img6,img7, img8, img9,img10, 
  img11, img12,img13, img14, img15,img16,img17,img18,img19,img20,
  img21, img22, img23,img24, img25, img26,img27, img28, img29,img30, 
  img31, img32, img33,img34, img35, img36,img37, img38, img39,img40, 
  img41, img42, img43,img44, img45

];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
};

const Mediagallery = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 min-h-screen">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-center text-amber-800 mb-14"
      >
        Media Gallery
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-72 object-cover"
            />
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Mediagallery;