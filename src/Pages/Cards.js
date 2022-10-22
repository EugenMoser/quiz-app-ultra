//Cards ARRAY!!!
import Card from "../components/Card";

function Cards({ cards }) {
  return (
    <>
      {/*create all cards*/}
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
          />
        );
      })}
    </>
  );
}

export default Cards;
