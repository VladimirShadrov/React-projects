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

function printMessage(msg: string[] | number | boolean): void {
  if (isStringArray(msg)) {
    msg.forEach((message) => console.log(message)); // msg: string[]
  } else if (isNumber(msg)) {
    console.log(msg); // msg: number
  } else if (isBoolean(msg)) {
    console.log(msg); // msg: boolean
  }
}

/**
 * Пользовательские функции
 */
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === 'string');
}

function isNumber(num: unknown): num is number {
  return typeof num === 'number';
}
// num: number

function isBoolean(bool: unknown): bool is boolean {
  return typeof bool === 'boolean';
}

printMessage(24);
