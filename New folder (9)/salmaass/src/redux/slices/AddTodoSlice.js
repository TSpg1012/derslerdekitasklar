import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};

export const AddTodoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let obj = {
        title: action.payload,
      };
      state.todos.push(obj);
    },
  },
});

export const { addTodo } = AddTodoSlice.actions;

export default AddTodoSlice.reducer;
