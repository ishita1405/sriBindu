import { Link } from "react-router-dom";
import "./MediaGallery.css";

import img1 from "../../../assets/gallery1.jpg";
import img2 from "../../../assets/gallery2.jpg";
import img3 from "../../../assets/gallery3.jpg";

function MediaGallery() {
  return (
    <section className="media-gallery">
      <div className="media-header">
        <span className="media-subtitle">Sri Bindu Madhav Mandir</span>
        <h2>Media Gallery</h2>

        <Link to="/explore" className="explore-btn">
          Explore
        </Link>
      </div>

      <div className="media-grid">
        <img src={img1} alt="Gallery item 1" />
        <img src={img2} alt="Gallery item 2" />
        <img src={img3} alt="Gallery item 3" />
      </div>
    </section>
  );
}

export default MediaGallery;
