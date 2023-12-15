console.log("salam");

let input: HTMLInputElement = document.querySelector(".todoItem")!;
let addBtn: HTMLButtonElement = document.querySelector(".addTodo")!;
let todos: HTMLUListElement = document.querySelector(".todos")!;

addBtn.addEventListener("click", function (e) {
  todos.innerHTML += `<li>${input.value} <button class="deleteBtn">Delete</button></li> `;

  let deleteBtns: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".deleteBtn")!;

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      this.parentElement?.remove();
    });
  });

  input.value = "";
});
