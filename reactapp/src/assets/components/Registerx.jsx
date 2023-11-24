import React, { useState, useRef } from "react";

function Registerx({ setCheck }) {
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
