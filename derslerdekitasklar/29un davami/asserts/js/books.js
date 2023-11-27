<<<<<<< HEAD
let cards = document.querySelector(".cards");
let carditems = document.querySelectorAll(".cart");
let search = document.querySelector("#search");
let basketcount = document.querySelector(".basketcount");

fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cards.innerHTML += `
        <div class="cart">
          <div class="img-wrapper">
            <img
              src="${element.imageurl}"
            />
          </div>
          <div class="bottom-part">
          <div class="info">
            <p>${element.title}</p>
            <p>Price: $${element.price}</p>
            <p>Stock: ${element.stock}</p>
          </div>
          <div class="buttons">
            <a href="details.html?name=book&id=${
              element.id
            }" class="pagedetails">Details</a>
            <div class="right">
              <button class="delete"><i class="fa-solid fa-trash"></i></button>
              <button class="addcart" name=${element.id}><i class="fa-solid ${
        JSON.parse(localStorage.getItem("basketItems")) &&
        JSON.parse(localStorage.getItem("basketItems")).find(
          (x) => x.id == element.id
        )
          ? "fa-check"
          : "fa-cart-shopping"
      }"></i></button>
              <button class="fave" name=${
                element.id
              }><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
          </div>
        </div>
        `;

      let basketbtns = document.querySelectorAll(".addcart");
      for (let btns of basketbtns) {
        btns.addEventListener("click", function () {
          this.firstChild.classList.replace("fa-cart-shopping", "fa-check");
          fetch("http://localhost:3000/books/" + btns.name)
            .then((res) => res.json())
            .then((data) => {
              let basketItems = JSON.parse(localStorage.getItem("basketItems"));
              if (!basketItems) {
                basketItems = [];
              }
              let existingItem = basketItems.findIndex(
                (item) => item.id === data.id
              );
              if (existingItem !== -1) {
                console.log("Item already exists in the basket.");
              } else {
                basketItems.push(data);
                basketcount.innerHTML = basketItems.length;
                localStorage.setItem(
                  "basketItems",
                  JSON.stringify(basketItems)
                );
              }
            });
        });
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
  let basketcount = document.querySelector(".basketcount");
  if (basketItems.length) {
    basketcount.innerHTML = basketItems.length;
  } else {
    basketcount.innerHTML = "0";
  }

  let basketbtns = document.querySelectorAll(".addcart");
  for (let btns of basketbtns) {
    let existingItem = basketItems.find((item) => item.id === btns.name);
    if (existingItem) {
      btns.firstChild.classList.replace("fa-shopping-cart", "fa-check");
    }
  }
});
=======
let cards = document.querySelector(".cards");
let carditems = document.querySelectorAll(".cart");
let search = document.querySelector("#search");
let basketcount = document.querySelector(".basketcount");

fetch("http://localhost:3000/books")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cards.innerHTML += `
        <div class="cart">
          <div class="img-wrapper">
            <img
              src="${element.imageurl}"
            />
          </div>
          <div class="bottom-part">
          <div class="info">
            <p>${element.title}</p>
            <p>Price: $${element.price}</p>
            <p>Stock: ${element.stock}</p>
          </div>
          <div class="buttons">
            <a href="details.html?name=book&id=${
              element.id
            }" class="pagedetails">Details</a>
            <div class="right">
              <button class="delete"><i class="fa-solid fa-trash"></i></button>
              <button class="addcart" name=${element.id}><i class="fa-solid ${
        JSON.parse(localStorage.getItem("basketItems")) &&
        JSON.parse(localStorage.getItem("basketItems")).find(
          (x) => x.id == element.id
        )
          ? "fa-check"
          : "fa-cart-shopping"
      }"></i></button>
              <button class="fave" name=${
                element.id
              }><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
          </div>
        </div>
        `;

      let basketbtns = document.querySelectorAll(".addcart");
      for (let btns of basketbtns) {
        btns.addEventListener("click", function () {
          this.firstChild.classList.replace("fa-cart-shopping", "fa-check");
          fetch("http://localhost:3000/books/" + btns.name)
            .then((res) => res.json())
            .then((data) => {
              let basketItems = JSON.parse(localStorage.getItem("basketItems"));
              if (!basketItems) {
                basketItems = [];
              }
              let existingItem = basketItems.findIndex(
                (item) => item.id === data.id
              );
              if (existingItem !== -1) {
                console.log("Item already exists in the basket.");
              } else {
                basketItems.push(data);
                basketcount.innerHTML = basketItems.length;
                localStorage.setItem(
                  "basketItems",
                  JSON.stringify(basketItems)
                );
              }
            });
        });
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
  let basketcount = document.querySelector(".basketcount");
  if (basketItems.length) {
    basketcount.innerHTML = basketItems.length;
  } else {
    basketcount.innerHTML = "0";
  }

  let basketbtns = document.querySelectorAll(".addcart");
  for (let btns of basketbtns) {
    let existingItem = basketItems.find((item) => item.id === btns.name);
    if (existingItem) {
      btns.firstChild.classList.replace("fa-shopping-cart", "fa-check");
    }
  }
});
>>>>>>> b665549cb1d5913634b2fc81f7e24b674029856a
