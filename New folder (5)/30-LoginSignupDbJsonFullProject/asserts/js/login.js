let login = document.querySelector(".login-form");

login.addEventListener("submit", function (e) {
  e.preventDefault();
  let loginUsername = document.querySelector(".login-username");
  let loginPassword = document.querySelector(".login-password");

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      data.find((x) => {
        if (
          x.username == loginUsername.value &&
          x.password == loginPassword.value
        ) {
          Swal.fire({
            icon: "success",
            title: "Congrats",
            text: "you login successfully",
            timer: 2500,
          }).then(() => {
            window.location.href = "mainpage.html";
          });
          sessionStorage.setItem("id", x.id);
          sessionStorage.setItem("username", x.username);
          sessionStorage.setItem("balance", x.balance);
          sessionStorage.setItem("email", x.email);
        } else {
          Swal.fire({
            icon: "error",
            title: "Invalid Username or password",
            text: "you password or username is wrong",
            timer: 2500,
          });
        }
      });
    });
});
