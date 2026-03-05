import React from "react";
import PujaCard from "./PujaCard";

import img1 from "../../../assets/PujaImages/images1.jpg";
import img2 from "../../../assets/PujaImages/images2.jpg";
import img3 from "../../../assets/PujaImages/images3.jpg";
import img4 from "../../../assets/PujaImages/images4.jpg";
import img5 from "../../../assets/PujaImages/images5.jpg";
import img6 from "../../../assets/PujaImages/images6.jpg";

const PujaSection = () => {
  const pujas = [
    {
      id: 1,
      image: img1,
      title: "Deep Dan (kartik maas only)",
      description:
        "Offering the Deep Dan Aarti seva to Shri Bindu Madhav ji is considered to bring wealth, fortune and protection against negative influences for the devotee. Panditji will be performing the Deep Dan Aarti Seva by chanting your name & gotra to Shri Bindu Madhav ji on the tithi. After the puja is offered, you will receive a video with your naam & gotra.",
      price: 400,
    },
    {
      id: 2,
      image: img2,
      title: "Mangala (Kakda) Aarti",
      description:
        "Offering the Mangal Arati seva daan is believed to invoke divine blessings, fostering spiritual connection, and fulfilling devotees' desires for prosperity and harmony. After the puja is offered, you will receive a video.",
      price: 551,
    },
    {
      id: 3,
      image: img3,
      title: "Makhan Aarti",
      description:
        "Panditji will be performing the Makhan Aarti by chanting you and your family member's Naam & Gotra and will offer flowers to Sri Bindu Madhav for fulfillment of desires.",
      price: 1500,
    },
    {
      id: 4,
      image: img4,
      title: "Shrikhand Malai Aarti",
      description:
        "Offering the Sreekhand Malai Aarti seva is considered to bring wealth and protection. Panditji will perform the aarti by chanting your name & gotra.",
      price: 300,
    },
    {
      id: 5,
      image: img5,
      title: "Tulsi Archan",
      description:
        "Tulsi Archana is one of the most special sevas for Bindu Madhav ji. It brings prosperity, harmony and protection.",
      price: 1500,
    },
    {
      id: 6,
      image: img6,
      title: "Abhishek seva",
      description:
        "Panditji will perform Abhishek with sacred mantras. It is believed to bring good health, happiness and prosperity.",
      price: 2100,
    },
  ];

  return (
    <div className="bg-[#eeeeee] min-h-screen py-12 px-16 font-serif">
      
      {/* Heading */}
      <h1 className="text-[18px] underline underline-offset-2 mb-10">
        Select Your Puja
      </h1>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pujas.map((puja) => (
            <PujaCard key={puja.id} {...puja} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PujaSection;