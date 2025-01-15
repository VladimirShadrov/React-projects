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

interface IUser<ParentsData extends IUserParentsData> {
  name: string;
  age: number;
  parents: ParentsData;
}

interface IUserParentsData {
  mother: string;
  father: string;
}

/**
 * В качестве дженерика мы можем передать любой объект, но с условием,
 * он должен содержать 2 обязательных свойства как в интерфейсе IUserParentsData
 */
const user: IUser<{ mother: string; father: string; isMarried: boolean }> = {
  name: 'Name',
  age: 26,
  parents: {
    mother: 'Mother name',
    father: 'Father name',
    isMarried: false,
  },
};

console.log(user);
