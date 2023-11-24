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
            <a href="details.html?name=singer&id=${element.id}" class="pagedetails">Details</a>
            <div class="right">
              <button class="delete"><i class="fa-solid fa-trash"></i></button>
              <button class="fave"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>
          </div>
        </div>
        `;
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
