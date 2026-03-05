import pandit1 from "../../assets/Gallery/pandit1.jpg"
const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <img
          src={pandit1}
          alt="Sri Bindu Madhav Mandir"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;