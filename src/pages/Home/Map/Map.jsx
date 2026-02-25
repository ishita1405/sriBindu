import "./Map.css";

function Map() {
  return (
    <section className="contact-map">
      <div className="contact-map-container">
        <div className="map-box">
          <iframe
            title="Sri Bindu Madhava Mandir Location"
            src="https://www.google.com/maps?q=Sri%20Bindu%20Madhava%20Perumal%20Temple%20Varanasi&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="contact-info">
          <p className="contact-subtitle">Visit the Most Renowned</p>
          <h2>Vishnu Temple of Kashi</h2>

          <div className="contact-line">
            📍 K 22/33 Panch Ganga Ghat Bindumadhav Temple, Varanasi 221001 Uttar Pradesh
          </div>

          <div className="contact-line">
            📞 +91 91293 91908
          </div>

          <hr />

          <div className="contact-line">
            ✉️ achyutpatwardhan@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
