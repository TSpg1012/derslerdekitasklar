<<<<<<< HEAD
let basketList = document.querySelector(".basketList");
let total = document.querySelector(".total p span");
let clearAll = document.querySelector(".clearAll");
let submit = document.querySelector(".Submit");

let totalprice = 0;

let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
basketItems.forEach(function (element, i) {
  basketList.innerHTML += `
    <div class="basketItem">
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
        <div class="changeing"> 
          <i class="fa-solid fa-plus increasement" name=${i}></i>
          <p class="change-count">${element.count}</p>
          <i class="fa-solid fa-minus decreasement" name=${i}></i>
        </div>
        <div class="deletebtn">
          <button class="delete"><p>remove</p></button>
        </div>
        </div>
        `;

  let increasement = document.querySelectorAll(".increasement");
  for (let increases of increasement) {
    increases.addEventListener("click", function () {
      index = increases.getAttribute("name");
      basketItems[index].count++;

      let changeCount = document.querySelectorAll(".change-count")[index];
      changeCount.textContent = basketItems[index].count;
      updateTotalPrice();

      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    });
  }

  let decreasement = document.querySelectorAll(".decreasement");
  for (let decreases of decreasement) {
    decreases.addEventListener("click", function () {
      let index = decreases.getAttribute("name");
      console.log(index);
      if (basketItems[index].count > 1) {
        basketItems[index].count--;

        let changeCount = document.querySelectorAll(".change-count")[index];
        changeCount.textContent = basketItems[index].count;

        updateTotalPrice();
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
      }
    });
  }

  let deletebtns = document.querySelectorAll(".deletebtn .delete");
  for (let btns of deletebtns) {
    btns.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      basketItems.splice(btns.name, 1);
      localStorage.setItem("basketItems", JSON.stringify([...basketItems]));
    });
  }
});

clearAll.addEventListener("click", function () {
  basketList.innerHTML = "";
  localStorage.removeItem("basketItems");
  total.innerHTML = "0";
});
submit.addEventListener("click", function () {
  basketList.innerHTML = "";
  localStorage.removeItem("basketItems");
  total.innerHTML = "0";
});

updateTotalPrice();

function updateTotalPrice() {
  totalprice = basketItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  total.textContent = `$${totalprice.toFixed(2)}`;
}
=======
let basketList = document.querySelector(".basketList");
let total = document.querySelector(".total p span");
let clearAll = document.querySelector(".clearAll");
let submit = document.querySelector(".Submit");

let totalprice = 0;

let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
basketItems.forEach(function (element, i) {
  basketList.innerHTML += `
    <div class="basketItem">
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
        <div class="changeing"> 
          <i class="fa-solid fa-plus increasement" name=${i}></i>
          <p class="change-count">${element.count}</p>
          <i class="fa-solid fa-minus decreasement" name=${i}></i>
        </div>
        <div class="deletebtn">
          <button class="delete"><p>remove</p></button>
        </div>
        </div>
        `;

  let increasement = document.querySelectorAll(".increasement");
  for (let increases of increasement) {
    increases.addEventListener("click", function () {
      index = increases.getAttribute("name");
      basketItems[index].count++;

      let changeCount = document.querySelectorAll(".change-count")[index];
      changeCount.textContent = basketItems[index].count;
      updateTotalPrice();

      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    });
  }

  let decreasement = document.querySelectorAll(".decreasement");
  for (let decreases of decreasement) {
    decreases.addEventListener("click", function () {
      let index = decreases.getAttribute("name");
      console.log(index);
      if (basketItems[index].count > 1) {
        basketItems[index].count--;

        let changeCount = document.querySelectorAll(".change-count")[index];
        changeCount.textContent = basketItems[index].count;

        updateTotalPrice();
        localStorage.setItem("basketItems", JSON.stringify(basketItems));
      }
    });
  }

  let deletebtns = document.querySelectorAll(".deletebtn .delete");
  for (let btns of deletebtns) {
    btns.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
      basketItems.splice(btns.name, 1);
      localStorage.setItem("basketItems", JSON.stringify([...basketItems]));
    });
  }
});

clearAll.addEventListener("click", function () {
  basketList.innerHTML = "";
  localStorage.removeItem("basketItems");
  total.innerHTML = "0";
});
submit.addEventListener("click", function () {
  basketList.innerHTML = "";
  localStorage.removeItem("basketItems");
  total.innerHTML = "0";
});

updateTotalPrice();

function updateTotalPrice() {
  totalprice = basketItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  total.textContent = `$${totalprice.toFixed(2)}`;
}
>>>>>>> b665549cb1d5913634b2fc81f7e24b674029856a
