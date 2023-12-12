"use strict";
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
var kind;
(function (kind) {
    kind["circle"] = "circle";
    kind["square"] = "square";
})(kind || (kind = {}));
class Circle {
    *this() { }
}
