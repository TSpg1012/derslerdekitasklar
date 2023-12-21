interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo: () => string;
}

export abstract class Human implements IHuman {
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

interface IStudent<hobby extends string | string[]> {
  groupName: string;
  hobbies: hobby;
  GPA: number;
  hasPassed: () => boolean;
}

export class Student extends Human implements IStudent<string | string[]> {
  groupName: string;
  private _GPA: number;
  hobbies: string | string[];
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    GPA: number,
    hobbies: string | string[]
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
    this.hobbies = hobbies;
  }

  get GPA() {
    return this._GPA;
  }
  set GPA(value: number) {
    if (value >= 0 && value <= 100) {
      this._GPA = value;
    }
  }

  hasPassed(): boolean {
    if (this._GPA < 50) {
      return false;
    } else {
      return true;
    }
  }

  getInfo(): string {
    return `${this.Fullname} studies in ${this.groupName} & has GPA:${this.GPA}`;
  }
}
