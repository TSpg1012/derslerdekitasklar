console.log("salam");
var input = document.querySelector(".todoItem");
var addBtn = document.querySelector(".addTodo");
var todos = document.querySelector(".todos");
addBtn.addEventListener("click", function (e) {
    todos.innerHTML += "<li>".concat(input.value, " <button class=\"deleteBtn\">Delete</button></li> ");
    var deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach(function (deleteBtn) {
        deleteBtn.addEventListener("click", function () {
            var _a;
            (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
        });
    });
    input.value = "";
});
