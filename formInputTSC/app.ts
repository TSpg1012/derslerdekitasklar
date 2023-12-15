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

class Employee extends Human implements IEmployee<skilss> {
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

interface IStudent<hobby extends string | string[]> {
  groupName: string;
  hobbies: hobby;
  GPA: number;
  hasPassed: () => boolean;
}

class Student extends Human implements IStudent<string | string[]> {
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

let form = document.querySelector<HTMLInputElement>(".form")!;
let nameInp = document.querySelector<HTMLInputElement>(".name")!;
let surnameinp = document.querySelector<HTMLInputElement>(".surname")!;
let age = document.querySelector<HTMLInputElement>(".age")!;
let human = document.querySelector<HTMLSelectElement>(".Human")!;

let groupname = document.querySelector<HTMLInputElement>(".groupname")!;
let gpa = document.querySelector<HTMLInputElement>(".gpa")!;
let hobbies = document.querySelector<HTMLInputElement>(".hobbies")!;

let salary = document.querySelector<HTMLInputElement>(".salary")!;
let skills = document.querySelector<HTMLInputElement>(".skills")!;
let positionInp = document.querySelector<HTMLInputElement>(".position")!;

let students = document.querySelector<HTMLDivElement>(".students")!;
let employee = document.querySelector<HTMLDivElement>(".employee")!;

human.addEventListener("change", () => {
  if (human.value === "student") {
    students.style.display = "block";
    employee.style.display = "none";
  } else {
    employee.style.display = "block";
    students.style.display = "none";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newAge = Number(age.value);
  let newGpa = Number(gpa.value);
  let newSalary = Number(salary.value);
  let newPosition;
  if (positionInp.value === "HR") {
    newPosition = position.HR;
  } else {
    newPosition = position.IT;
  }
  if (human.value === "student") {
    let student = new Student(
      nameInp.value,
      surnameinp.value,
      newAge,
      groupname.value,
      newGpa,
      hobbies.value
    );
    console.log(student);
  } else {
    let employee = new Employee(
      nameInp.value,
      surnameinp.value,
      newAge,
      newSalary,
      skills.value,
      newPosition
    );
    console.log(employee);
  }
});
