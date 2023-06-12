import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>

      <Button action={() => setGood(good + 1)}>Good</Button>
      <Button action={() => setNeutral(neutral + 1)}>Neutral</Button>
      <Button action={() => setBad(bad + 1)}>Bad</Button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
