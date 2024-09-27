import { useState } from "react";
import "./index.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  const [activeId, setActiveID] = useState(null);

  function handleActive(id) {
    setActiveID(id !== activeId ? id : null);
  }

  return (
    <div className="App">
      <div className="flashcards">
        {questions.map((el) => (
          <FlashCards
            item={el}
            key={el.id}
            activeId={activeId}
            handleActive={handleActive}
          />
        ))}
      </div>
    </div>
  );
}

function FlashCards({ item, activeId, handleActive }) {
  return (
    <div
      className={item.id === activeId ? "selected" : ""}
      onClick={() => handleActive(item.id)}
    >
      <p>{item.id === activeId ? item.answer : item.question}</p>
    </div>
  );
}
