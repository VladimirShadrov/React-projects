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

// нужно реализовать generic тип CustomRequiredByKeys
// данный тип похож на встроенный тип Required, с тем отличием, что Required делает обязательными все поля,
// а CustomRequiredByKeys только те, которые перечислены во втором аргументе, остальные поля должны остаться без изменений

// TODO шаблон который нужно изменить
type CustomRequiredByKeys = any;

// вариант применения CustomRequiredByKeys
type SelectProps = {
  value?: string;
  size?: string;
  options?: string[];
};

type SelectPropsWithRequiredFields = CustomRequiredByKeys<SelectProps, 'value' | 'size'>;

// компилятор должен выдать ошибку для полей value и size, так как они должны быть обязательными
const props: SelectPropsWithRequiredFields = {
  options: undefined, // тут ошибки быть не должно
  value: undefined, // тут должна быть ошибка
  size: undefined, // тут должна быть ошибка
};

const map = (array, callback) => {
  array.forEach((el, index, arr) => {
    result.push(callback(el, index, arr));
  });

  return result;
};
