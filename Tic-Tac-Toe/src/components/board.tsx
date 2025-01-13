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

const myConst: (string | number | boolean)[] = [1, 'string', true];

/**
 * Если параметр функции является union типом
 * для взаимодействия с ним нужно использовать сужение типов
 */
function myFunc(a: string | number | boolean): void {
  if (typeof a === 'string') {
    a.toLowerCase(); // string
  } else if (typeof a === 'number') {
    a.toFixed(); // number
  } else {
    console.log(a); // boolean
  }
}

console.log(myConst);
myFunc(false);

type objType = {
  name: string;
  age: number;
  gender: string;
};

type Role = {
  role: string;
};

const myIntersection: objType & Role = {
  age: 24,
  gender: 'male',
  name: 'Petya',
  role: 'user',
};
