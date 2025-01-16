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

function myNever(data: boolean): string {
  if (data === true) {
    return 'true';
  } else if (data === false) {
    return 'false';
  } else {
    data;
    return '';
  }
}

const btn = document.querySelector('.button');

if (btn) {
  btn.addEventListener('click', () => {});
} else if (btn === null) {
  throw new Error('Button not exist', btn);
} else {
  btn;
}
