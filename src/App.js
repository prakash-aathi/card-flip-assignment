import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

const cardImages = [
  {
    src: "https://avatars.githubusercontent.com/u/76159067?v=4",
    name: "Prakash A",
    matched: false,
  },
  {
    src: "https://avatars.githubusercontent.com/u/67831591?v=4",
    name: "Sai raghav",
    matched: false,
  },
  {
    src: "https://avatars.githubusercontent.com/u/114467107?v=4",
    name: "Gowtham",
    matched: false,
  },
  {
    src: "https://avatars.githubusercontent.com/u/94226091?v=4",
    name: "safeena",
    matched: false,
  },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const suffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    suffle();
  }, []);

  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-3xl py-2">Card Flip game</h2>
        <div className="flex justify-center items-center ">
          <button
            className="bg-orange-400 text-white p-2 mx-2 rounded hover:bg-orange-600"
            onClick={suffle}
          >
            New game
          </button>
          <p className="mx-2">No of turns: {turns}</p>
        </div>
      </div>
      <div className="grid grid-rows-4 lg:grid-rows-2 grid-flow-col">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
}

export default App;
