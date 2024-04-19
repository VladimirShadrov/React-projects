import '../index.css';
import Сell from './cell';
import { useState } from 'react';

export default function App(): JSX.Element {
  const [cells, setCellState] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(cells);
  let status: string;

  function handleClick(i: number) {
    if (cells[i] || winner) {
      return;
    }

    const nextCells = cells.slice();
    xIsNext ? (nextCells[i] = 'X') : (nextCells[i] = 'O');
    setCellState(nextCells);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(cells: string[]): string | false {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return false;
  }

  if (winner) {
    status = `Победитель: ${winner}`;
  } else {
    status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="game">
        <div className="game__board">
          <h3 className="game__status">{status}</h3>
          <div className="game__field">
            <Сell value={cells[0]} cellClickHandler={() => handleClick(0)} />
            <Сell value={cells[1]} cellClickHandler={() => handleClick(1)} />
            <Сell value={cells[2]} cellClickHandler={() => handleClick(2)} />
            <Сell value={cells[3]} cellClickHandler={() => handleClick(3)} />
            <Сell value={cells[4]} cellClickHandler={() => handleClick(4)} />
            <Сell value={cells[5]} cellClickHandler={() => handleClick(5)} />
            <Сell value={cells[6]} cellClickHandler={() => handleClick(6)} />
            <Сell value={cells[7]} cellClickHandler={() => handleClick(7)} />
            <Сell value={cells[8]} cellClickHandler={() => handleClick(8)} />
          </div>
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
