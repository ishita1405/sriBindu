import React from "react";
import { Hand, CreditCard, ClipboardList, Play } from "lucide-react";

const HowToParticipate = () => {
  const steps = [
    {
      icon: <Hand size={28} />,
      title: "Select Puja",
      desc: "Select a puja and bhet daan options such as vastra daan, gau seva, brahman bhojan etc",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Pay Dakshina",
      desc: "Securely pay your dakshina using UPI, Card or Net Banking",
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Fill sankalp form",
      desc: "Enter offering name(s), gotra, prasad delivery address & puja wish",
    },
  ];

  return (
    <section className="bg-[#f7f4ee] py-20 px-6 md:px-16 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 animate-fade-up">
          <h2 className="text-4xl font-semibold text-black">
            How to <span className="text-orange-500">Participate</span> in Puja?
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            3 easy steps to offer puja with chintamani
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group transition-all duration-500 ease-out 
              hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
                bg-orange-500 text-white shadow-lg mb-6
                transition-all duration-500 group-hover:scale-110"
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-black mb-3">
                {step.title}
              </h3>

              <p className="text-gray-700 leading-7 text-[16px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Video Step */}
        <div className="mt-20 max-w-lg animate-fade-up delay-500">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl 
            bg-orange-500 text-white shadow-lg mb-6">
            <Play size={28} />
          </div>

          <h3 className="text-xl font-semibold text-black mb-3">
            On puja date – Watch puja video
          </h3>

          <p className="text-gray-700 leading-7 text-[16px]">
            Short darshan video will be shared on Puja tithi. Full video
            with name-gotra will be sent on WhatsApp within 3–5 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;