import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/landing1.jpg";
import Footer from "../components/Footer";

function EssentialBudget() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Essential Budget"
        arrow="arrow-hide"
      />

      <Footer />
    </>
  );
}

export default EssentialBudget;
