import React from "react";
import templeImg from "../../assets/Video/images1.jpg";

const TempleBanner = () => {
  return (
    <div
      className="w-full h-[500px] bg-repeat-x bg-contain"
      style={{
        backgroundImage: `url(${templeImg})`,
      }}
    ></div>
  );
};

export default TempleBanner;