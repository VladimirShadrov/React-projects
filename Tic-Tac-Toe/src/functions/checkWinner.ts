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

function print<T>(msg: T): void {
  console.log(msg);
}

interface Logger {
  log: <T>(msg: T) => T;
}

const obj: Logger = {
  log: (msg) => msg,
};

obj.log('sdfsdfds');
print('');

type User<T> = {
  name: string;
  age: T;
};

interface IUser<ParData extends IUserParents> {
  name: string;
  age: number;
  parents: ParData;
}

interface IUserParents {
  mother: string;
  father: string;
}

const user1: IUser<{ father: string; mother: string; isMarried: boolean }> = {
  age: 33,
  name: 'ksdf',
  parents: {
    father: '',
    isMarried: false,
    mother: '',
  },
};
user1.age;

function deposit<T extends string | number>(amount: T): void {
  console.log(`Вы положили на счет: ${amount}`);
}

deposit(500);
deposit('200');

class User2<T, U> {
  name: T;
  age: U;

  constructor(name: T, age: U) {
    this.name = name;
    this.age = age;
  }
}

class Admin<T> extends User2<string, number> {
  role: T;

  constructor(name: string, age: number, role: T) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.role = role;
  }
}

const user = new User2<string, number>('Sam', 24);
user.age;

const admin = new Admin<string>('Max', 44, 'Admin');
admin.name;
