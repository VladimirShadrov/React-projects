import { useState } from 'react';

export default function App() {
  const [score, setScore] = useState(0);
  const [value, setValue] = useState('Значение в инпуте');

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
      <h1>Input value: {value}</h1>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
