import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../redux/Slice/TodoSlice";
import { RootState } from "./../redux/store";
import { deleteTodo } from "./../redux/Slice/TodoSlice";

function Todos({}: Todo) {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo: Todo) => {
            return (
              <li key={todo.id}>
                {todo.title}  
                <button
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todos;
