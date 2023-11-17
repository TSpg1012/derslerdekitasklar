import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function Loginx({ setCheck, setLogin, setAdmin, admin }) {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6556258684b36e3a431f3560.mockapi.io/products/users")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  let password = useRef();
  let username = useRef();
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <input
            type="text"
            placeholder="username"
            className="form-control inp_text"
            ref={username}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            ref={password}
          />
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let user = data.find(
                (user) =>
                  user.password === password.current.value &&
                  user.name === username.current.value
              );
              console.log(user);
              if (user) {
                setLogin(true);
                setAdmin(user.isAdmin);
                setCheck(false);
                console.log("success");
              }
            }}
          >
            Login
          </button>
          <p>
            If you dont have an account, then:
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCheck(false);
                setLogin(false);
              }}
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Loginx;
