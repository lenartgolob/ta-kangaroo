import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
// import AboutImg from "../assets/night.jpg";
import AboutImg from "../assets/lenart4.jpeg";


function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        arrow="arrow-hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
