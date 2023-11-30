import { configureStore } from "@reduxjs/toolkit";
import addTodo from "./slices/AddTodoSlice";
import AddPizza from "./slices/AddPizza";
export const store = configureStore({
  reducer: {
    todo: addTodo,
    pizza: AddPizza,
  },
});
