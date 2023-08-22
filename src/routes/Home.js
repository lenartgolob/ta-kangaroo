import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import Landing from "../assets/landing2.jpg";


function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg={Landing}
        title="Your Journey Your Story"
        // text="Choose Your Favourite Destination."
        arrow="arrow"
        // buttonText="Travel Plan"
        // url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
