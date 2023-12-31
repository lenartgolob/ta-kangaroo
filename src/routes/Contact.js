import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/contact2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        arrow="arrow-hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
