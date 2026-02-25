import { useEffect, useState } from "react";
import "./PujaHero.css";

const slides = [
  "https://utsav-media.gumlet.io/Events/1761549728459_1236155.webp?w=828&q=50",
  "https://utsav-media.gumlet.io/Communities/1726904227337_dp_cover_6.webp?w=828&q=50",
  "https://utsav-media.gumlet.io/Communities/1726904227345_dp_cover_6.webp?w=828&q=50",
];

function PujaHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollNext = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="puja-hero">
      <div className="puja-hero-container">
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="puja-content">
          <h2>
            Bindu Madhav Mandir Kashi Vishesh Iccha Purti Maha Puja
            <br />
            & Kala Jamun Bhog Daan
          </h2>

          <p className="highlight">
            Puja for Love & Blessings of Lord Krishna
          </p>

          <div className="date-box">
            Mon - Dec 01, 2025 –`` Gita Jayanti
          </div>

          <button className="cta-btn" onClick={scrollNext}>
            Select Your Puja
          </button>
        </div>
      </div>
    </section>
  );
}

export default PujaHero;
