import Board from './board';
import { useState } from 'react';

export default function Game(): JSX.Element {
  const [history, setHistory] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const currentCells = history[history.length - 1];

  function handlePlay(nextCells: string[]): void {
    setHistory([...history, nextCells]);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="game">
        <div className="game__board">
          <Board xIsNext={xIsNext} cells={currentCells} onPlay={handlePlay} />
        </div>
        <div className="game__info">
          <ol>
            <li>
              <button>Начать игру</button>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
