let whislistList = document.querySelector(".whislistList");
let total = document.querySelector(".total p span");
let clearAll = document.querySelector(".clearAll");
let submit = document.querySelector(".Submit");

let whislistItem = JSON.parse(localStorage.getItem("whislistItem")) || [];
whislistItem.forEach(function (element, i) {
  whislistList.innerHTML += `
    <div class="whislistItem">
    <div class="img-wrapper">
          <img
            src="${element.imageurl}"
            alt=""
          />
        </div>
        <div class="info">
          <p>${element.title}</p>
          <p>Price: $${element.price}</p>
          <p>Stock: ${element.stock}</p>
        </div>
        <div class="deletebtn">
          <button class="delete"><p>remove</p></button>
        </div>
        </div>
        `;

  let deletebtns = document.querySelectorAll(".deletebtn .delete");
  for (let btns of deletebtns) {
    btns.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      whislistItem.splice(btns.name, 1);
      localStorage.setItem("whislistItem", JSON.stringify([...whislistItem]));
    });
  }
});

clearAll.addEventListener("click", function () {
  whislistItem.innerHTML = "";
  localStorage.removeItem("whislistItem");
  total.innerHTML = "0";
});
