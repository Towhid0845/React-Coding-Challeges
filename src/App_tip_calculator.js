import React, { useState } from "react";

export default function App(props) {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [input, setInput] = useState("");
  const [parcent1, setParcent1] = useState(0);
  const [parcent2, setParcent2] = useState(0);
  const tip = input * ((parcent1 + parcent2) / 2 / 100);

  function handleSubmit() {
    setInput("");
    setParcent1(0);
    setParcent2(0);
  }

  return (
    <div>
      <BillInput input={input} billInput={setInput} />
      <br />
      <br />
      <SelectParcentange parcent={parcent1} selectParcent={setParcent1}>
        How did you like the service ?{" "}
      </SelectParcentange>
      <br />
      <br />
      <SelectParcentange parcent={parcent2} selectParcent={setParcent2}>
        How did your friend like the service?{" "}
      </SelectParcentange>
      <br />
      <br />
      {input > 0 && (
        <Output input={input} tip={tip} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

function BillInput({ input, billInput }) {
  return (
    <>
      <label htmlFor="">How much was the bill </label>
      <input
        type="text"
        placeholder="Bill Input"
        value={input}
        onChange={(e) => billInput(Number(e.target.value))}
      />
    </>
  );
}

function SelectParcentange({ children, parcent, selectParcent }) {
  return (
    <>
      <label htmlFor="">{children}</label>
      <select
        name=""
        id=""
        value={parcent}
        onChange={(e) => selectParcent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Output({ input, tip, handleSubmit }) {
  return (
    <>
      <h3>
        <em>
          You pay total ${input + tip} (${input} bill + ${tip} tip).
        </em>
      </h3>
      <button onClick={handleSubmit}>Reset</button>
    </>
  );
}
