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

type Currencies = {
  russia: 'rur';
  usa: 'usd';
  belarus: 'rub';
  china: 'cny';
};

type CurBaseType = 'rus' | 'usa' | 'china' | 'belarus';

type NoUSA = Omit<Currencies, 'usa'>;
type OnlyRussia = Pick<Currencies, 'russia'>;

type NoUSAType = Exclude<CurBaseType, 'usa'>;
type NoUSAInterface = Exclude<keyof Currencies, 'usa'>;

type OnlyRusType = Extract<CurBaseType, 'rus'>;
type OnlyRusType = Extract<keyof Currencies, 'russia'>;

type P = Partial<Currencies>;
type RO = Readonly<Currencies>;
