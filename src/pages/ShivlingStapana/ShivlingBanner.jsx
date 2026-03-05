import React from "react";
import banner from "../../assets/devi1.jpg";

const ShivlingBanner = () => {
  return (
    <div
      className="w-full h-[220px] bg-repeat-x bg-contain"
      style={{ backgroundImage: `url(${banner})` }}
    ></div>
  );
};

export default ShivlingBanner;