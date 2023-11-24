import React from "react";

function Loginx({ setCheck }) {
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form action="">
          <input
            type="text"
            placeholder="username"
            className="form-control inp_text"
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
          />
          <br />
          <button type="submit">Login</button>
          <p>
            If you dont have an account, then:
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setCheck(false);
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
