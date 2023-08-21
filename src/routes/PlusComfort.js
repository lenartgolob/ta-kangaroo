import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/landing1.jpg";
import Footer from "../components/Footer";

function PlusComfort() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Plus Comfort"
        btnClass="hide"
      />

      <Footer />
    </>
  );
}

export default PlusComfort;
