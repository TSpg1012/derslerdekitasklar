interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo: () => string;
}

abstract class Human implements IHuman {
  private _name: string;
  private _surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;
  }

  getInfo() {
    return `${this.Fullname}  `;
  }

  public get name() {
    return this._name;
  }

  public get surname() {
    return this._surname;
  }

  public get Fullname(): string {
    return `${this._surname} ${this._name}  `;
  }
}

type skilss = string | string[];
enum position {
  IT = "IT",
  HR = "HR",
}

interface IEmployee<Skills extends skilss> {
  salary: number;
  skills: Skills;
  position: position;
}

export class Employee extends Human implements IEmployee<skilss> {
  salary: number;
  skills: skilss;
  position: position;
  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: skilss,
    position: position
  ) {
    super(name, surname, age);
    this.salary = salary;
    this.skills = skills;
    this.position = position;
  }

  getInfo(): string {
    return `${this.Fullname} is ${position.IT}`;
  }
}
