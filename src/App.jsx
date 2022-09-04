import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const newCard = cardData.map((elem) => (
    <Card
      key={elem.id}
      //Instead of structurally laying out each prop like this we can actually just pass the entire elem to Card like this
      elem={elem}
      //We have to also go in and destructure in Card.jsx by adding an .item to each prop

      /*You can also go furhter and destructure using the spread operator 
      {...elem}
      Although this can be a bit confusing and obfuscated*/

      /* profile={elem.coverImg}
      // rating={elem.stats.rating}
      // reviews={elem.stats.reviewCount}
      // location={elem.location}
      // title={elem.title}
      // price={elem.price}
       openSpots={elem.openSpots}*/
    />
  ));

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{newCard}</section>
    </div>
  );
}

export default App;
