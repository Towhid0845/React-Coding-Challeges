import { useState } from "react";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Jan 10 2025");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="date_counter">
        <div className="step">
          <button onClick={() => setStep((s) => s - 1)}>-</button>
          <span>Step:{step}</span>
          <button onClick={() => setStep((s) => s + 1)}>+</button>
        </div>
        <div className="counter">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span>Count:{count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
