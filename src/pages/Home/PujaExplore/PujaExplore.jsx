import "./PujaExplore.css";

import puja1 from "../../../assets/puja1.jpg";
import puja2 from "../../../assets/puja2.jpg";
import puja3 from "../../../assets/puja3.jpg";

function PujaExplore() {
  return (
    <section className="puja-explore">
      <div className="puja-header">
        <h2>Explore Your Puja</h2>
        <a href="/explore" className="explore-btn">Explore</a>
      </div>

      <div className="puja-grid">
        <div className="puja-card">
          <img src={puja1} alt="Deep Dan" />
          <h3>Deep Dan (kartik maas only)</h3>
          <p>✓ Offering the Sreekhand Malai Aarti seva to Shri Bindu Madhav is considered to bring wealth, fortune and protection against negative influences for the devotee.</p>
          <p>✓ Panditji will be performing the seva by chanting your name & gotra.</p>
          <a className="card-btn">Participate for ₹ 4000/-</a>
        </div>

        <div className="puja-card">
          <img src={puja2} alt="Mangala Aarti" />
          <h3>Mangala (Kakada) Aarti</h3>
          <p>✓ Panditji will be performing the puja by chanting your & your partner's naam & gotra.</p>
          <p>✓ Get your Puja video on WhatsApp within 3 days.</p>
          <a className="card-btn">Participate for ₹ 551/-</a>
        </div>

        <div className="puja-card">
          <img src={puja3} alt="Makhan Aarti" />
          <h3>Makhan Aarti</h3>
          <p>✓ Panditji will be performing the puja by chanting your family member's naam & gotra.</p>
          <p>✓ Get your Puja video on WhatsApp within 3 days.</p>
          <a className="card-btn">Participate for ₹ 1500/-</a>
        </div>
      </div>
    </section>
  );
}

export default PujaExplore;
