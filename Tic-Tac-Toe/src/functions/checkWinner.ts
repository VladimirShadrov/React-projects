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

function printMessage(msg: string[] | string | boolean | number): void {
  if (isStringArray(msg)) {
    msg.forEach((msg) => console.log(msg));
  } else if (isString(msg)) {
    console.log(msg);
  } else if (isBoolean(msg)) {
    console.log(msg);
  } else if (isNumber(msg)) {
    console.log(msg.toString());
  }
}

function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every((item) => typeof item === 'string');
}

function isString(msg: unknown): msg is string {
  return typeof msg === 'string';
}

function isBoolean(msg: unknown): msg is boolean {
  return typeof msg === 'boolean';
}

function isNumber(msg: unknown): msg is number {
  return typeof msg === 'number';
}
