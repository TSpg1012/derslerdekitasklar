import { Outlet, Link } from "react-router-dom";
import * as React from "react";

const Layout = () => {
  return (
    <>
      <nav
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(2,17,1,1) 10%, rgba(3,27,1,1) 20%, rgba(4,38,2,1) 30%, rgba(6,47,2,1) 40%, rgba(9,61,4,1) 50%, rgba(8,69,4,1) 60%, rgba(12,102,7,1) 70%, rgba(14,120,8,1) 80%, rgba(16,138,9,1) 90%, rgba(18,161,10,1) 100%)",
          height: "50px",
        }}
      >
        <ul
          style={{
            display: "flex",
            fontSize: "20px",
            gap: "10px",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <li
            style={{
              marginTop: "10px",
              fontFamily: "SagoeUI",
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              marginTop: "10px",
            }}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            style={{
              marginTop: "10px",
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            style={{
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
