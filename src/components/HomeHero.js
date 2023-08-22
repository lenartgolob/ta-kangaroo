import "./HomeHeroStyles.css";
import Arrow from "../assets/arrow.png";

function HomeHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          {/* <p>{props.text}</p> */}
          <a href="#trip-highlights"><img className={props.arrow} src={Arrow} /></a>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
