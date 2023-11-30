import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos &&
          todos.map((elem) => {
            return <li key={uuidv4()}>{elem.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default Todos;
