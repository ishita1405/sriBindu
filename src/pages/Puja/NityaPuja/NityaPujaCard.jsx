import React from "react";

const NityaPujaCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white w-[420px] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[350px] object-cover"
      />

      {/* Content */}
      <div className="p-6">
        
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <div className="flex items-start gap-2 text-sm text-gray-700">
          <span className="text-green-600 text-lg">✓</span>
          <p className="leading-relaxed">
            {description}
          </p>
        </div>

        {/* Button */}
        <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition">
          Participate for {price}/
        </button>

      </div>
    </div>
  );
};

export default NityaPujaCard;