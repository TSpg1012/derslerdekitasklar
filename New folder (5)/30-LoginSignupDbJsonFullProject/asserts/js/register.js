<<<<<<< HEAD
let register = document.querySelector(".register-form");

let r = /[A-Z]/;
let r2 = /[a-zA-Z0-9\s]/;
register.addEventListener("submit", function (e) {
  e.preventDefault();
  let registerUsername = document.querySelector(".register-username");
  let registerPassword = document.querySelector(".register-password");
  let balance = document.querySelector(".register-balance");
  let email = document.querySelector(".register-email");

  let passwordMatch = registerPassword.value.match(r);
  if (passwordMatch < 1) {
    Swal.fire({
      icon: "error",
      title: "wrong Input",
      text: "You password need a big letter at least",
    });
  } else {
    if (registerUsername.value.length < 4) {
      Swal.fire({
        icon: "error",
        title: "wrong Input",
        text: "You Username has three letters at least",
      });
    } else {
      if (isNaN(balance.value)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: "Please enter a valid number for your balance.",
        });
      } else if (balance.value < 0) {
        Swal.fire({
          icon: "error",
          title: "Wrong Input",
          text: "Your balance isn't enough for shopping",
        });
      } else {
        fetch("http://localhost:3000/users")
          .then((res) => res.json())
          .then((data) => {
            let find = data.find((x) => x.username == registerUsername.value);
            if (find) {
              Swal.fire({
                icon: "error",
                title: "wrong Input",
                text: "you have same name as other people",
              });
            } else {
              let obj = {
                username: registerUsername.value,
                password: registerPassword.value,
                balance: balance.value,
                email: email.value,
              };

              fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
              });
              Swal.fire({
                icon: "success",
                title: "Congrats",
                text: "you registered successfully",
                timer: 2500,
              }).then(() => {
                window.location.href = "login.html";
              });
            }
          });
      }
    }
  }
});

// let obj = {
//   username: registerUsername.value,
//   password: registerPassword.value,
//   balance: balance.value,
//   email: email.value,
// };
// fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// });
// Swal.fire({
//   icon: "success",
//   title: "Congrats",
//   text: "You registered succesfully",
//   timer: 2000,
// }).then(() => {
//   window.location.href = "login.html";
// });
=======
let register = document.querySelector(".register-form");

let r = /[A-Z]/;
let r2 = /[a-zA-Z0-9\s]/;
register.addEventListener("submit", function (e) {
  e.preventDefault();
  let registerUsername = document.querySelector(".register-username");
  let registerPassword = document.querySelector(".register-password");
  let balance = document.querySelector(".register-balance");
  let email = document.querySelector(".register-email");

  let passwordMatch = registerPassword.value.match(r);
  if (passwordMatch < 1) {
    Swal.fire({
      icon: "error",
      title: "wrong Input",
      text: "You password need a big letter at least",
    });
  } else {
    if (registerUsername.value.length < 4) {
      Swal.fire({
        icon: "error",
        title: "wrong Input",
        text: "You Username has three letters at least",
      });
    } else {
      if (isNaN(balance.value)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: "Please enter a valid number for your balance.",
        });
      } else if (balance.value < 0) {
        Swal.fire({
          icon: "error",
          title: "Wrong Input",
          text: "Your balance isn't enough for shopping",
        });
      } else {
        fetch("http://localhost:3000/users")
          .then((res) => res.json())
          .then((data) => {
            let find = data.find((x) => x.username == registerUsername.value);
            if (find) {
              Swal.fire({
                icon: "error",
                title: "wrong Input",
                text: "you have same name as other people",
              });
            } else {
              let obj = {
                username: registerUsername.value,
                password: registerPassword.value,
                balance: balance.value,
                email: email.value,
              };

              fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
              });
              Swal.fire({
                icon: "success",
                title: "Congrats",
                text: "you registered successfully",
                timer: 2500,
              }).then(() => {
                window.location.href = "login.html";
              });
            }
          });
      }
    }
  }
});

// let obj = {
//   username: registerUsername.value,
//   password: registerPassword.value,
//   balance: balance.value,
//   email: email.value,
// };
// fetch("http://localhost:3000/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// });
// Swal.fire({
//   icon: "success",
//   title: "Congrats",
//   text: "You registered succesfully",
//   timer: 2000,
// }).then(() => {
//   window.location.href = "login.html";
// });
>>>>>>> b665549cb1d5913634b2fc81f7e24b674029856a
