import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Pizza from "./components/Pizza";

function App() {
  return (
    <>
      {/* <AddTodo />
      <Todos /> */}
      <Pizza />
    </>
  );
}

export default App;
