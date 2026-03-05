import React from "react";
import NityaPujaCard from "./NityaPujaCard";

import nityaimag1 from "../../../assets/NityaPuja/Nityapuja1.jpg";
import nityaimag2 from "../../../assets/NityaPuja/Nityapuja2.jpg";

const NityaCard = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-16 py-10">

      <h2 className="text-2xl font-semibold text-amber-800 underline mb-10 font-serif">
        Nitya Puja
      </h2>

      <div className="flex gap-10 justify-center">

        <NityaPujaCard
          image={nityaimag1}
          title="Annadan seva (Annakshetra)"
          price="₹11000"
          description="Offering the Annadan seva to Shri Bindu Madhav ji is considered to bring wealth, fortune and protection against negative influences for the devotee."
        />

        <NityaPujaCard
          image={nityaimag2}
          title="Bhog seva (One Day)"
          price="₹2100"
          description="Bhog seva is one of the most special sevas for Bindu Madhav ji."
        />

      </div>
    </div>
  );
};

export default NityaCard;