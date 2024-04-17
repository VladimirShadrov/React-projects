import '../index.css';

export default function App() {
  return (
    <>
      <div className="game">
        <div className="game__board">
          <h3 className="game__status">Next player: X</h3>
          <div className="game__field">
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
            <button className="cell">X</button>
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
