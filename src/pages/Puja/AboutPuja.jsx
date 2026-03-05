import React, { useState } from "react";

function AboutPuja() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#f6f6f6] min-h-screen flex justify-center py-12 px-4 font-serif">
      <div className="max-w-4xl w-full bg-white rounded-lg border border-gray-200 shadow-sm p-8">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#5b3a1a] mb-6 border-b border-gray-200 pb-2">
          About Puja
        </h2>

        {/* Description */}
        <div className="text-gray-700 leading-8 text-[15px] space-y-4">

          <p>
            The Gopashtami Special – Graha Shanti Puja & Kala Jamun Bhog Daan at Bindu Madhav Temple (Kashi) is a devotional
             ritual conducted with the aim of invoking the loving blessings of Lord Krishna and aligning one’s life with harmony, 
             protection, and divine love.
             </p>

          {expanded && (
            <>
              <p>
                This ceremony particularly addresses planetary (graha) imbalances through Graha Shanti rites,
                 while the Bhog Daan of Kala Jamun (black jambul fruit) symbolizes sweetness and fulfillment 
                 of heartfelt desires. The temple of Lord Bindu Madhav is one of the ancient sacred sites of Varanasi, 
                 dedicated to a form of Vishnu/Krishna, deeply connected with purity of devotion and spiritual merit. 
              </p>

              <p>
                . In this puja, devotees’ Naam & Gotra are included in the sankalp (devotional intention),
                 and offerings of Kala Jamun along with Bhog are made to the deity after the Graha Shanti invocation. 
                 The ritual is designed to clear obstructions related to planetary doshas, enhance the flow of divine grace,
                  and open the doors of love-filled blessings from Lord Krishna.
              </p>
            </>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-600 text-lg">✔</span>
            <h3 className="text-lg font-semibold text-gray-800">
              Benefits:
            </h3>
          </div>

          <ul className="list-disc pl-10 space-y-3 text-gray-700 text-[15px] leading-7">
            <li>Pacifies adverse planetary influences and brings celestial harmony.</li>
            <li>Invites divine grace for protection and fulfillment.</li>
            <li>Removes obstacles in relationships and spiritual growth.</li>
            <li>Brings peace of mind and stability.</li>
            <li>Strengthens devotion and faith.</li>
          </ul>
        </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 text-sm hover:underline mt-2"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
      </div>
      
    </div>
  );
}

export default AboutPuja;