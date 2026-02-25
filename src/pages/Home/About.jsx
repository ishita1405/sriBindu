import "./home.css";
import aboutImg from "../../assets/devi1.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <span className="about-label">About & History</span>
          <h2>Shri Bindu Madhav, Kashi</h2>

          <p>
            Shri Bindu Madhav Mandir, dedicated to Lord Vishnu, is one of the most
            sacred and historically significant temples in Varanasi. It is
            located near Panchganga Ghat, where the holy rivers Ganga, Yamuna,
            Saraswati, Kirana, and Dhutpapa are believed to converge.
          </p>

          <p>
            The temple is an important center for Vaishnavite worshippers and is
            considered the largest among the Pancha Madhav temples, a group of
            five Vishnu temples in Kashi. The temple is known for its spiritual
            aura, drawing thousands of devotees daily.
          </p>

          <p>
            Shri Bindu Madhav Temple has a rich history. The original temple was
            demolished during the Mughal period, and in its place, the Alamgiri
            Mosque was constructed, which still stands at Panchganga Ghat.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Shri Bindu Madhav Mandir" />
        </div>
      </div>
    </section>
  );
}

export default About;
