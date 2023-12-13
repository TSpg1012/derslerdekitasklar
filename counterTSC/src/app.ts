// function fn(n) {
//   return true;
// }

// let incrementBtn = document.createElement("button");
// let decrementBtn = document.createElement("button");
// let count = document.createElement("p");

// document.body.append(decrementBtn, count, incrementBtn);

// let counter: number = 0;
// incrementBtn?.addEventListener("click", function () {
//   counter += 1;
//   count.innerHTML = String(counter);
// });

// decrementBtn?.addEventListener("click", function () {
//   counter -= 1;
//   count.innerHTML = counter.toString();
// });

// type Person = {
//   name: string;
//   surname: string;
//   age: number;
//   id: number;
//   birthDate: Date;
//   hobbies: string[];
// };

// function createPerson<T>(
//   name: string,
//   surname: string,
//   age: number,
//   id: number | string,
//   birthDate: Date,
//   hobbies: string[]
// ) {
//   console.log(name, surname, age, id, birthDate,hobbies);
// }

// createPerson("seid", "tagizada", 19, 1, new Date("May 21, 2004"), [
//   "playing videogames, Football",
// ]);
enum kind {
  circle = "circle",
  square = "square",
}

interface shape {
  kind: kind;
  radius?: number;
  sideLength?: number;
  getArea: () => number;
}

class Circle implements shape {
  kind: kind = kind.circle;
  radius?: number;

  constructor(radius?: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * (this.radius ?? 0) ** 2;
  }
}

class Square implements shape {
  kind: kind = kind.square;
  sideLength?: number;
  constructor(sideLength?: number) {
    this.sideLength = sideLength;
  }

  getArea(): number {
    return (this.sideLength ?? 0) ** 2;
  }
}
const circle = new Circle(2);
const circleArea = circle.getArea();

const square = new Square(4);
const squareArea = square.getArea();

console.log(circleArea);
console.log(squareArea);
