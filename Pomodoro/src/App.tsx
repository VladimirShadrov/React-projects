import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  function increase() {
    if (score >= 5) {
      return;
    }

    setScore(score + 1);
  }

  function decrease() {
    if (score <= 0) {
      return;
    }

    setScore(score - 1);
  }
  return (
    <div>
      <h1>Hello, your score: {score} </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
