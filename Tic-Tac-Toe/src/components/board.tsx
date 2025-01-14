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
interface IUser {
  age: number;
  name: string;
  printUserInfo: (age: number, name: string) => void;
}

interface IUserRole {
  role: string;
}

/**
 * Объединяет в единый интерфейс свойства
 * интерфейсов IUser и IUserRole
 */
interface IUserWithRole extends IUser, IUserRole {
  /**
   * Кроме того есть возможность задавать дополнительные свойства,
   * которых нет в родительских интерфейсах
   */
  gender: string;
}

const user: IUserWithRole = {
  age: 50,
  name: 'Вова',
  printUserInfo: (age, name) => console.log(`Пользователю ${name} ${age} лет`),
  role: 'user',
  gender: 'male',
};

user.printUserInfo(user.age, user.name);

type User = {
  name: string;
  age: number;
};

type Gender = {
  gender: string;
};

type Role = {
  role: string;
};

// Объединяем в единый тип свойства типов User, Gender и Role
type UserWithRoleAndGender = User & Gender & Role;

// Объект, созданный на основе типа UserWithRoleAndGender
const newUser: UserWithRoleAndGender = {
  age: 24,
  gender: 'male',
  name: 'Sergey',
  role: 'user',
};

console.log(newUser);
