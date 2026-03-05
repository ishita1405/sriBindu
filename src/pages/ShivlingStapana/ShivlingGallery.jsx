import React from "react";
import img1 from "../../assets/Shivling/image1.jpg";
import img2 from "../../assets/Shivling/image2.jpg";
import img3 from "../../assets/Shivling/image3.jpg";
import img4 from "../../assets/Shivling/image4.jpg";
import img5 from "../../assets/Shivling/image5.jpg";
import img6 from "../../assets/Shivling/image6.jpg";

const ShivlingGallery = () => {

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="bg-gray-100 py-12 px-6">

      <h2 className="text-center text-3xl md:text-4xl font-bold text-amber-800 mb-10">
        ShivLing Stahpana Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt="puja"
              className="w-full h-[280px] object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShivlingGallery;