import hero from "../../assets/hero.png";
import PujaHero from "./Slides/PujaHero";
import "./Puja.css";
function Puja(){

    return(
        <>
        <img src={hero} alt="Sri Bindu Madhav Mandir" className="hero-image" />
        <PujaHero/>
        </>
    )
}
export default Puja;