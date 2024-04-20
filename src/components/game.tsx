import '../index.css';
import Board from './board';
import { useState } from 'react';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill('')]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIxNext: boolean = currentMove % 2 === 0;
  const currentCells: string[] = history[currentMove];

  function handlePlay(nextCells: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextCells];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move: number) => {
    let description: string;
    if (move > 0) {
      description = `Вернуться к ходу: ${move}`;
    } else {
      description = `Начать игру`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game__board">
        <Board xIsNext={xIxNext} cells={currentCells} onPlay={handlePlay} />
      </div>
      <div className="game__info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
