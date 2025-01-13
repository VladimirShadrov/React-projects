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

interface Car {
  engine: string;
  wheels: {
    value: number;
    type: string;
  };
}

interface Ship {
  engine: string;
  sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    console.log(vehicle.wheels.value); // vehicle: Car
  } else {
    console.log(vehicle); // vehicle: Ship
  }
}

/**
 * Проверка на то, что тип аргумента - Car
 * приводим аргумент к нужному типу (в нашем случае Car)
 * и проверяем вложенное свойство на то, что оно не undefined
 */
function isCar(car: unknown): car is Car {
  return (car as Car).wheels.value !== undefined;
}

repairVehicle();
