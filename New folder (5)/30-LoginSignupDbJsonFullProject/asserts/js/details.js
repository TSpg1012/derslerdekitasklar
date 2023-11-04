let cardDetail = document.querySelector(".card-detail");

let id = new URLSearchParams(location.search).get("id");
let name = new URLSearchParams(location.search).get("name");
if (name == "singer") {
  fetch("http://localhost:3000/singers?id=" + id)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        cardDetail.innerHTML += `
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
             <a href="mainpage.html" class="pagedetails">Home</a>
           </div>
          </div>
        </div>
        `;
      });
    });
} else {
  fetch("http://localhost:3000/books?id=" + id)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        cardDetail.innerHTML += `
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
             <a href="books.html" class="pagedetails">Home</a>
           </div>
          </div>
        </div>
        `;
      });
    });
}
// fetch("http://localhost:3000/singers?id=" + id)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element) => {
//       cardDetail.innerHTML += `
//         <div class="cart">
//           <div class="img-wrapper">
//             <img
//               src="${element.image}"
//             />
//           </div>
//           <div class="bottom-part">
//            <div class="info">
//              <p>${element.name}</p>
//              <p>${element.name} is <b>${element.country}</b></p>
//              <p>Genre: ${element.genre}</p>
//            </div>
//            <div class="buttons">
//              <a href="mainpage.html" class="pagedetails">Home</a>
//            </div>
//           </div>
//         </div>
//         `;
//     });
//   });
