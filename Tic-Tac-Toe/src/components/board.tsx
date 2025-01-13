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

/**
 * Type allias для примитивов
 */
type UserNames = 'Петя' | 'Вася'; // Type allias

function myFunc(name: UserNames): void {
  console.log(`Hello ${name}`);
}

myFunc('Петя');
myFunc('Гриша'); // Ошибка, т.к. параметр может быть или 'Петя' или 'Вася'

/**
 * Type allias для объектов
 */
type User = {
  name: string;
  age: number;
  skills: string;
};

const user: User = {
  age: 25,
  name: 'Вася',
  skills: 'frontend',
};

type objType = {
  name: string;
  age: number;
  gender: string;
};

type Role = {
  role: string;
};

/**
 * Объединяем несколько типов для того,
 * чтобы в объекте получить доступ к свойствам обоих типов
 */
const myIntersection: objType & Role = {
  age: 24,
  gender: 'male',
  name: 'Petya',
  role: 'user',
};

console.log(myIntersection);
