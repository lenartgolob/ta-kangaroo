import React from "react";
import Reef1 from "../assets/reef4.jpg";
import Reef2 from "../assets/reef3.png";
import Beach1 from "../assets/beach1.jpeg";
import Beach2 from "../assets/beach2.jpg";
import Wildlife1 from "../assets/wildlife9.jpg";
import Wildlife2 from "../assets/wildlife8.jpg";
import Rainforest1 from "../assets/rainforest1.jpg";
import Rainforest2 from "../assets/rainforest5.jpg";
import Nature1 from "../assets/nature1.jpg";
import Nature2 from "../assets/nature2.jpg";
import Culture1 from "../assets/culture1.jpg";
import Culture2 from "../assets/culture2.jpg";
import City1 from "../assets/city1.jpg";
import City2 from "../assets/city2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div id="trip-highlights" className="destination">
        <h1>Trip Highlights</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationData
          className="first-des"
          heading="The Great Barrier Reef"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
          img1={Reef2}
          img2={Reef1}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Scenic Beaches"
          text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={Beach2}
          img2={Beach1}
        />

        <DestinationData
          className="first-des"
          heading="Wildlife"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
          img1={Wildlife1}
          img2={Wildlife2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Breathtaking Nature"
          text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={Nature2}
          img2={Nature1}
        />

        <DestinationData
          className="first-des"
          heading="Daintree Rainforest and Cape Tribulation"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
          img1={Rainforest1}
          img2={Rainforest2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="Metropolitan Cities"
          text="If you’re looking for a hike that’s a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You’ll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There’s a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you’ve made it back down, head straight to the beach for a refreshing, well-deserved swim."
          img1={City2}
          img2={City1}
        />
        
        <DestinationData
          className="first-des"
          heading="Learn About Native Culture"
          text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
          img1={Culture1}
          img2={Culture2}
        />

      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
