let cards = document.querySelector(".cards");
let url = "http://localhost:3000/singers/";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      i++;
      cards.innerHTML += `
        <div class="cart">
          <div class="img-wrapper">
            <img
              src="${element.image}"
              alt=""
            />
          </div>
          <div class="info">
            <p>${element.name}</p>
            <p>${element.country}</p>
          </div>
          <div class="buttons">
            <button class="delete" name=${element.id}><i class="fa-solid fa-trash"></i></button>
            <button class="fav" name=${element.id}><i class="fa-regular fa-heart"></i></button>
          </div>
        </div>
        `;
      let deletebtns = document.querySelectorAll(".delete");
      for (let btns of deletebtns) {
        btns.addEventListener("click", function () {
          this.parentElement.parentElement.remove();
          fetch(url + btns.name, {
            method: "DELETE",
          });
        });
      }

      let favbtns = document.querySelectorAll(".fav");
      for (let btns of favbtns) {
        btns.addEventListener("click", function () {
          fetch(url + btns.name)
            .then((res) => res.json())
            .then((data) => {
              let favitems = JSON.parse(localStorage.getItem("favItems")) || [];
              if (favitems) {
                favitems.push(data);
              } else {
                favitems = [data];
              }
              localStorage.setItem("favItems", JSON.stringify(favitems));
            });
        });
      }
    });
  });

//   {
//     "singers": [
//       {
//         "id": 1,
//         "image": "https://cdnph.upi.com/collection/fp/upi/13662/88b34862834a02024bf56a2d85fa4a99/The-Weeknd-turns-33-a-look-back_1_1.jpg",
//         "name": "The Weeknd",
//         "country": "Abel Testafe is Canadian",
//         "genre": "R&B"
//       },
//       {
//         "id": 2,
//         "image": "https://upload.wikimedia.org/wikipedia/az/b/b3/The_Neighbourhood.jpg",
//         "name": "The Neighbourhood",
//         "country": "The Neighbourhood is American band",
//         "genre": "Indie"
//       },
//       {
//         "id": 3,
//         "image": "https://i.scdn.co/image/ab67616d00001e02344cb1f0ad668b1d372b5333",
//         "name": "Duman",
//         "country": "Duman is Turkish Band",
//         "genre": "Grunge rock"
//       }
//     ]
//   }
