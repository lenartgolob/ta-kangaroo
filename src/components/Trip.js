import "./TripStyles.css";
import TripData from "./TripData";
import EssentialBudget from "../assets/hostel1.jpg";
import EssentialComfort from "../assets/hotel1.png";
import PlusBudget from "../assets/hostel2.jpg";
import PlusComfort from "../assets/hotel2.jpg";
import Custom from "../assets/custom.jpeg";


function Trip() {
  return (
    <div className="trip">
      <h1>Our packages</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={EssentialBudget}
          heading="Essentials Budget"
          text="Indonesia, officially the Republic of Indonesia, is a country in
          Southeast Asia and Oceania between the Indian and Pacific oceans. It
          consists of over 17,000 islands, including Sumatra, Java, Sulawesi,
          and parts of Borneo and New Guinea."
        />
        <TripData
          image={EssentialComfort}
          heading="Essentials Comfort"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />
        <TripData
          image={PlusBudget}
          heading="+ Budget"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />

        <TripData
          image={PlusComfort}
          heading="+ Comfort"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />

        <TripData
          image={Custom}
          heading="Custom"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
