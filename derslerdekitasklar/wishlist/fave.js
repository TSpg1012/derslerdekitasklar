let tbody = document.querySelector(".addcarddata");

let favitems = JSON.parse(localStorage.getItem("favItems")) || [];

favitems.forEach((element, i) => {
  tbody.innerHTML += `
    <tr>
          <th scope="row">${element.id}</th>
          <td>${element.name}</td>
          <td><img src="${element.image}" alt="" /></td>
          <td>${element.genre}</td>
          <td>
            <button class="delete" name="${element.id}" value="${i}"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
    `;

  let deletebtns = document.querySelectorAll(".delete");
  for (let btns of deletebtns) {
    btns.addEventListener("click", function () {
      btns.parentElement.parentElement.remove();
      favitems.splice(btns.value, 1);
      localStorage.setItem("favItems", JSON.stringify([...favitems]));
    });
  }
});
