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

type Values = number | string | boolean;

function getValueType(val: Values): Values {
  if (typeof val === 'number') {
    return val.toFixed();
  } else if (typeof val === 'string') {
    return val.toLowerCase();
  } else {
    return val;
  }
}

type UserNames = 'Alex' | 'Sam';

function getName(name: UserNames): void {
  console.log(name);
}

getName('Sam');

type User = {
  name: string;
  age: number;
  sayHello: (name: string) => void;
};

type Gender = {
  gender: string;
};

type Role = {
  role: string;
};

type UserWithRoleAndGender = User & Gender & Role;

const user: UserWithRoleAndGender = {
  age: 23,
  gender: 'male',
  name: 'Alex',
  role: 'Admin',
  sayHello: (name: string) => console.log(`Hello, ${name}`),
};

user.sayHello(user.name);
