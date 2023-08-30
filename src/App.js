import { useState } from "react";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Steps Challenge II</h2>
      <div>
        <StepsComponent step={step} setStep={setStep} />
      </div>
      <div>
        <CountsComponent count={count} setCount={setCount} />
      </div>
      <div>
        <DateText
          step={step}
          setStep={setStep}
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
};

const StepsComponent = ({ step, setStep }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />

      <p>Step: {step}</p>
    </div>
  );
};

const CountsComponent = ({ count, setCount }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button style={{ display: "inline" }} onClick={() => setCount(count - 1)}>
        -
      </button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      ></input>
      <button style={{ display: "inline" }} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

const DateText = ({ step, setStep, count, setCount }) => {
  const clickHandler = () => {
    setCount(0);
    setStep(1);
  };
  const currentDate = new Date();
  const date = new Date();
  date.setDate(date.getDate() + step * count);
  let preText = "";
  if (date.getTime() === currentDate.getTime()) {
    preText = "Today is";
  } else if (date.getTime() > currentDate.getTime()) {
    preText = `${step * count} days from today is`;
  } else {
    preText = `${Math.abs(step * count)} days ago was`;
  }
  return (
    <div>
      <p>
        <span>{preText} </span>
        <span>{date.toDateString()}.</span>
      </p>
      {/* My Method  */}
      {date.getTime() !== currentDate.getTime() ? (
        <div>
          <span>My Method: </span>
          <button onClick={() => clickHandler()}>Reset</button>
        </div>
      ) : null}

      {/* Trainer Method */}
      {count !== 0 || step !== 1 ? (
        <div>
          <span>Trainer's Method: </span>
          <button onClick={() => clickHandler()}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};
