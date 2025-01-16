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

async function foo() {
  try {
    const resp = await fetch('');
    const data = await resp.json();
  } catch (e: unknown) {
    if (typeof e === 'string') {
      e.toLowerCase();
    } else if (e instanceof Error) {
      e.message;
    }
  }
}

const str: any = 'sdfsdf';
str.map((e: number) => e.toFixed());

const str2: unknown;
