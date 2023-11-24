let container = document.querySelector(".container");
let url = "http://localhost:3000/books";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      container.innerHTML += `
      <div class="card" style="width:200px;height:200px">
      <img class="card-img-top" src="${element.imageurl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p> ${element.stock}</p>
        <p> ${element.price}</p>
        <a href="" class="btn btn-primary">Add to basket</a>
      </div>
    </div>
        `;
    });
  });
