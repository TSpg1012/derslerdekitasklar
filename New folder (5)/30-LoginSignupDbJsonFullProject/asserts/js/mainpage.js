let cards = document.querySelector(".cards");
let carditems = document.querySelectorAll(".cart");
let search = document.querySelector("#search");
fetch("http://localhost:3000/singers")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cards.innerHTML += `
        <div class="cart">
          <div class="img-wrapper">
            <img
              src="${element.image}"
            />
          </div>
          <div class="bottom-part">
          <div class="info">
            <p>${element.name}</p>
            <p>${element.name} is <b>${element.country}</b></p>
            <p>Genre: ${element.genre}</p>
          </div>
          <div class="buttons">
            <a href="details.html?name=singer&id=${
              element.id
            }" class="pagedetails">Details</a>
            <div class="right">
              <button class="delete"><i class="fa-solid fa-trash"></i></button>
              <button class="fave" name=${element.id}><i class="${
        JSON.parse(localStorage.getItem("wishlistItems")) &&
        JSON.parse(localStorage.getItem("wishlistItems")).find(
          (x) => x.id == element.id
        )
          ? "fa-solid"
          : "fa-regular"
      } fa-heart"></i></button>
            </div>
          </div>
          </div>
        </div>
        `;

      let favebtns = document.querySelectorAll(".fave");
      for (let btns of favebtns) {
        btns.addEventListener("click", function () {
          if (this.firstChild.classList.contains("fa-regular")) {
            this.firstChild.classList.replace("fa-regular", "fa-solid");
            fetch("http://localhost:3000/books/" + btns.name)
              .then((res) => res.json())
              .then((data) => {
                let wishlistItems = JSON.parse(
                  localStorage.getItem("wishlistItems")
                );
                if (!wishlistItems) {
                  wishlistItems = [data];
                } else {
                  // let existingItem = wishlistItems.findIndex(
                  //   (item) => item.id === data.id
                  // );
                  // if (existingItem !== -1) {
                  //   console.log("Item already exists in the basket.");
                  // }
                  wishlistItems.push(data);
                }
                localStorage.setItem(
                  "wishlistItems",
                  JSON.stringify(wishlistItems)
                );
              });
          } else {
            this.firstChild.classList.replace("fa-solid", "fa-regular");
          }
        });
      }
    });
  });

search.addEventListener("keyup", function () {
  let letter = search.value.trim().toLowerCase();
  carditems.forEach((element) => {
    let name = element.querySelector(".info p:first-child").toLowerCase();

    if (name.includes(letter)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

let basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
let basketcount = document.querySelector(".basketcount");
if (basketItems.length) {
  basketcount.innerHTML = basketItems.length;
} else {
  basketcount.innerHTML = "0";
}

let pages = document.querySelector(".pages");
let loginUsername = sessionStorage.getItem("username");

if (loginUsername) {
  let login = document.querySelector(".loginLink");
  login.style.display = "none";
  pages.innerHTML += `<a href="profile.html"><button class="profileBtn"> <i class="fa-solid fa-user"></i> ${loginUsername}</button></a>
      <a href="login.html"><button class="logout"><i class="fa-solid fa-right-from-bracket"></i></button></a>
      `;
  let button = document.querySelector(".profileBtn");
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.gap = "10px";
  button.style.width = "80px";

  let logout = document.querySelector(".logout");
  logout.addEventListener("click", function () {
    sessionStorage.removeItem("username");
  });
}

let basketaccess = document.querySelector(".basketaccess");

basketaccess.addEventListener("click", function (event) {
  if (!loginUsername) {
    Swal.fire({
      icon: "warning",
      title: "Invalid basket access",
      text: "You have to log in for shopping",
    });
    event.preventDefault();
    basketcount.innerHTML = "0";
  }
});
