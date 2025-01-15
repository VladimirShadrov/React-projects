export function checkWinner(cellData: string[]) {
  const winVariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winVariants.length; i++) {
    const [a, b, c] = winVariants[i];
    if (cellData[a] && cellData[a] === cellData[b] && cellData[a] === cellData[c]) {
      return cellData[a];
    }
  }
  return null;
}

// ===============================

const foo1 = <T extends string | boolean>(data: T): T => {
  return data;
};

function foo2<T extends boolean | number | string>(data: T): T {
  return data;
}
