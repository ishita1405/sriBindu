import React from "react";

const PujaCard = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] w-[300px] flex flex-col">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-[220px] w-full object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        
        <div>
          <h2 className="text-[15px] font-semibold mb-2">
            {title}
          </h2>

          <div className="flex items-start gap-2">
            <span className="text-green-600 text-[14px] mt-[2px]">✓</span>

            <p className="text-[12.5px] text-gray-800 leading-[18px]">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5 flex justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[13px] px-6 py-2 rounded-md hover:opacity-90 transition">
            Participate for ₹ {price}/
          </button>
        </div>

      </div>
    </div>
  );
};

export default PujaCard;