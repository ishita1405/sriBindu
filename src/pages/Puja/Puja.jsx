import hero from "../../assets/hero.png";
import PujaHero from "./Slides/PujaHero";
import "./Puja.css";
import PujaSection from "./PujaCard/PujaSection";
import NityaCard from "./NityaPuja/NityaCard"
import AboutPuja from "./AboutPuja";
import HowToParticipate from "./HowToParticipate";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PujaReview from "../Puja/PujaReview";

function Puja(){

    return(
        <>
        <Navbar />
        <img src={hero} alt="Sri Bindu Madhav Mandir" className="hero-image" />
        <PujaHero/>
        <PujaSection />;
        <NityaCard />
        <AboutPuja />
        <HowToParticipate />
        <PujaReview />
        <Footer />

        </>
    )
}
export default Puja;