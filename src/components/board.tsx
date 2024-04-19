import '../index.css';
import Сell from './cell';
import { calculateWinner } from '../functions/calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  cells: string[];
  onPlay: (cells: string[]) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, cells, onPlay }): JSX.Element => {
  const winner: string | false = calculateWinner(cells);
  let status: string;

  if (winner) {
    status = `Победитель: ${winner}`;
  } else {
    status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
  }

  function handleClick(i: number) {
    if (cells[i] || winner) {
      return;
    }

    const nextCells = [...cells];
    xIsNext ? (nextCells[i] = 'X') : (nextCells[i] = 'O');
    onPlay(nextCells);
  }

  return (
    <>
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
    </>
  );
};

export default Board;
