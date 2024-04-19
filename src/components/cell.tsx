import React from 'react';

interface CellProps {
  value: string;
  cellClickHandler: () => void;
}

const Cell: React.FC<CellProps> = ({ value, cellClickHandler }): JSX.Element => {
  return (
    <button className="cell" onPointerDown={cellClickHandler}>
      {value}
    </button>
  );
};

export default Cell;
