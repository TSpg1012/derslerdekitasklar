import React, { useState, useRef } from "react";
import axios from "axios";

function Registerx({ setCheck, setLogin }) {
  let username = useRef();
  let password = useRef();
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <form action="">
          <input
            ref={username}
            type="text"
            placeholder="Enter username"
            className="form-control"
          />
          <br />
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className="form-control"
          />
          <br />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let obj = {
                name: username.current.value,
                password: password.current.value,
                isAdmin: false,
              };
              axios.post(
                "https://6556258684b36e3a431f3560.mockapi.io/products/users",
                obj
              );
              console.log(obj);
              setLogin(false);
            }}
          >
            Register
          </button>
          <p>
            If you have an account, then:{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCheck(true);
                setLogin(false);
              }}
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Registerx;
