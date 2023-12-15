import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: {
    id: "",
    title: "",
  },
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      let obj: Todo = {
        id: action.payload.id,
        title: action.payload.title,
      };
      state.todo = obj;
    },

    setTodo: (state) => {
      state.todos = [...state.todos, state.todo];
      state.todo = {
        id: "",
        title: "",
      };
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, setTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
