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

interface User {
  name: string;
  age: number;
  sayHello: (name: string) => void;
}

interface Role {
  role: string;
}

interface UserWithRoleAndGender extends User, Role {
  gender: string;
}

interface IUser {
  [key: string]: string;
}

const user: UserWithRoleAndGender = {
  age: 24,
  gender: 'male',
  name: 'Sam',
  role: 'user',
  sayHello: (name) => console.log(`Hello, ${name}`),
};

user.sayHello(user.name);

const user2: IUser = {
  name: 'Sam',
  age: '24',
  gender: 'male',
};
