import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/AddTodoSlice";

function AddTodo() {
  let [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div>
      <h1>AddTodo</h1>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input));
          console.log(todos);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
