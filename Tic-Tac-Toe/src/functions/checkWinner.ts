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

class User<T, U> {
  name: T;
  age: U;

  constructor(name: T, age: U) {
    this.name = name;
    this.age = age;
  }
  getUserName<T>(surname: T): string {
    if (typeof surname !== 'string') {
      return `Имя пользователя: ${this.name}`;
    } else {
      return `Имя пользователя: ${this.name} ${surname}`;
    }
  }
}

const userMax = new User('Max', 24);
userMax.getUserName('Ivanoff'); // Имя пользователя: Max Ivanoff

class UserAdmin<T> extends User<string, string> {
  role: T;
  name: string;
  age: string;

  constructor(name: string, age: string, role: T) {
    super(name, age);

    this.name = name;
    this.age = age;
    this.role = role;
  }
}

new UserAdmin();
