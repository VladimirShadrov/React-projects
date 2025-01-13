import Cell from './cell';
import React from 'react';
import { checkWinner } from '../functions/checkWinner';

interface BoardProps {
  xIsNext: boolean;
  cells: string[];
  onPlay: (cells: string[]) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, cells, onPlay }) => {
  const winner = checkWinner(cells);
  let status: string;

  function handleCellClick(i: number) {
    if (winner || cells[i]) {
      return;
    }

    const nextSquares = [...cells];
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  }

  if (winner) {
    status = `Победил: ${winner}`;
  } else {
    status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
  }

  const cellsLayout = cells.map((cell, index) => <Cell key={Math.random()} value={cell} cellClickHandler={() => handleCellClick(index)} />);

  return (
    <>
      <h3 className="game__status">{status}</h3>
      <div className="game__field">{cellsLayout}</div>
    </>
  );
};

export default Board;

//=====================================

interface User {
  name: string;
  age: number;
}

type required = Required<User>;
/**
  На выходе получаем:
  type required = {
    name: string;
    age: number;
}
 */

type readonly = Readonly<User>;
/**
  На выходе получаем
  type readonly = {
    readonly name: string;
    readonly age: number;
}
 */

type partial = Partial<User>;

/**
 На выходе получаем:

  type partial = {
      name?: string | undefined;
      age?: number | undefined;
  }
 */
