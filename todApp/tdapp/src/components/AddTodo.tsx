import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodo, addTodo } from "../redux/Slice/TodoSlice";
import { Todo } from "../redux/Slice/TodoSlice";
import { RootState } from "./../redux/store";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddTodo({}: Todo) {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>TodoApp</h1>
      <input
        type="text"
        value={todo.title}
        onChange={(e) => {
          dispatch(addTodo({ id: uuidv4(), title: e.target.value }));
        }}
      />
      <button
        onClick={() => {
          if (todo.title !== "") {
            dispatch(setTodo());
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
