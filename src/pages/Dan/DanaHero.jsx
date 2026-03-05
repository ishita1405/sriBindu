import React from "react";
import heroImg from "../../assets/Dan/dan1.jpg";
import profileImg from "../../assets/Dan/dan1.jpg";

const DanaHero = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO BANNER ================= */}
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-800 mb-6 border-b-2 border-orange-800 inline-block pb-2">
              Shri. Muralidhar Patwardhan
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              My name is Muralidhar Patwardhan, and I have devoted the last 45 years
              of my life in service to Shri Bindu Madhav Mandir in Varanasi.
              This sacred temple, dedicated to Lord Vishnu, is one of the most
              spiritually powerful and historically significant places in Kashi,
              located near the revered Panchganga Ghat.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Over the decades, I have witnessed countless devotees come in search
              of peace, blessings, healing, and guidance. I have remained closely
              involved in daily rituals, special Vishnu pujas, aartis, and various
              religious traditions that keep the temple’s ancient spirit alive.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Though the original temple was destroyed during the reign of Mughal
              Emperor Aurangzeb, the devotion of believers never faded. Today,
              the temple stands once again as a strong symbol of faith, resilience,
              and divine energy.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end">
        <img
            src={profileImg}
            alt="Shri Muralidhar Patwardhan"
            className="rounded-2xl shadow-xl h-90 w-94 md:w-90 object-cover"
        />
        </div>

        </div>
      </div>

    </div>
  );
};

export default DanaHero;