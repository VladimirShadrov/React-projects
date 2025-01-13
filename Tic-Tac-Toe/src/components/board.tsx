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
interface Currencies {
  russia: 'rur';
  usa: 'usd';
  belarus: 'rub';
  china: 'cny';
}

type CountriesUSAAndRussia = Extract<keyof Currencies, 'usa' | 'russia'>;

// На выходе получим: type CountriesUSAAndRussia = "usa" | "russia"

// /**
//  * Выбирает (фильтрует) по набору свойств
//  */
// type CurrRusAndBelarus = Pick<Currencies, 'russia' | 'belarus'>;

type CuntriesRusChinaBelarus = 'russia' | 'belarus' | 'china'; // Исходный тип

/**
 * Извлекаем одно свойство
 */
type China = Extract<CuntriesRusChinaBelarus, 'china'>; // type China = "china"

/**
 * Извлекаем несколько свойств
 */
type OnlyRussiaAndBelarus = Extract<CuntriesRusChinaBelarus, 'russia' | 'belarus'>; // type OnlyRussiaAndBelarus = "belarus" | "russia"

/**
 * Исключение нескольких свойств из типа Currencies
 */
type CurrenciesWthoutUSA = Omit<Currencies, 'usa' | 'belarus' | 'china'>;

// На выходе получим

const a: CurrenciesWthoutUSA = {};
