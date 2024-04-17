import '../index.css';
import Сell from './cell';

export default function App() {
  return (
    <>
      <div className="game">
        <div className="game__board">
          <h3 className="game__status">Next player: X</h3>
          <div className="game__field">
            <Сell />
            <Сell />
            <Сell />
            <Сell />
            <Сell />
            <Сell />
            <Сell />
            <Сell />
            <Сell />
          </div>
        </div>
        <div className="game__info">
          <ol>
            <li>
              <button>Go to game start</button>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
