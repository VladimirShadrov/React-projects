export function checkWinner<T>(cellData: T[]) {
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

type CB<T, U> = (el: T, index: number, array: T[]) => U;

const map = <T, U>(array: T[], callback: CB<T, U>): U[] => {
  const result: U[] = [];
  array.forEach((el, index, arr) => {
    result.push(callback(el, index, arr));
  });

  return result;
};

const arr: number[] = [1, 2, 3];

const res = map(arr, (item) => item + '1');
