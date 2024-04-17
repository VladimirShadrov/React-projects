import React from 'react';
import { useState } from 'react';

// interface CellProps {
//   value: string;
// }

// const Cell: React.FC<CellProps> = ({ value }) => {
//   return <button className="cell">{value}</button>;
// };

// export default Cell;

export default function Cell() {
  const [value, setState] = useState('');

  function cellClickHandler() {
    setState('X');
  }

  return (
    <button className="cell" onClick={cellClickHandler}>
      {value}
    </button>
  );
}
