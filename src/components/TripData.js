import "./TripStyles.css";

function TripData(props) {
  return (
      <div className="t-card">
        <a href={props.redirect}>
        <div className="t-image">
          <img src={props.image} alt="trip" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        </a>
      </div>
  );
}

export default TripData;
