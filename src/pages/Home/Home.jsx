import "./home.css";
import About from "./About";
import heroImg from "../../assets/temple.jpg"
import MediaGallery from "./MediaGallery/MediaGallery";
import PujaExplore from "./PujaExplore/PujaExplore";
import Sevak from "./Sevak/Sevak";
import Map from "./Map/Map";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Home(){
    return (
    <>
    <Navbar />
    <section

      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >

      <div className="hero-overlay">
        <p className="hero-location">Panchganga Ghat, Kashi</p>
        <h1 className="hero-title">Sri Bindu Madhav Mandir</h1>
      </div>
    </section>
    <About/>
    <MediaGallery></MediaGallery>
    <PujaExplore></PujaExplore>
    <Sevak></Sevak>
    <Map></Map>
    <Footer />
    </>
  );
}
export default Home;