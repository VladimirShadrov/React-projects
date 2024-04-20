import React from 'react';

interface CellProps {
  value: string;
  cellClickHandler: () => void;
}

const Cell: React.FC<CellProps> = ({ value, cellClickHandler }) => {
  return (
    <button className="cell" onClick={cellClickHandler}>
      {value}
    </button>
  );
};

export default Cell;
