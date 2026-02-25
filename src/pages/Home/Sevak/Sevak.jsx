import "./Sevak.css";

import sevak1 from "../../../assets/sevak1.jpeg";
import sevak2 from "../../../assets/sevak2.jpeg";
import bg from "../../../assets/puja4.jpg";

function Sevak() {
  return (
    <section
      className="sevak"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="sevak-title">Sevak</h2>

      <div className="sevak-list">
        <div className="sevak-card">
          <img src={sevak1} alt="Shri. Muralidhar Patwardhan" />
          <div className="sevak-role">Temple Sevak</div>
          <div className="sevak-name">Shri. Muralidhar Patwardhan</div>
        </div>

        <div className="sevak-card">
          <img src={sevak2} alt="Shri. Achyut Patwardhan" />
          <div className="sevak-role">Temple Sevak</div>
          <div className="sevak-name">Shri. Achyut Patwardhan</div>
        </div>
      </div>
    </section>
  );
}

export default Sevak;
