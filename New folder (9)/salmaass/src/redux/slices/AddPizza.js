import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { current } from "@reduxjs/toolkit";

const initialState = {
  toppings: [],
  isGlutten: false,
  pizza: [],
};

export const AddPizza = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    AddToppings: (state, action) => {
      let obj = {
        id: uuidv4(),
        title: action.payload,
      };
      state.toppings.push(obj);
    },
    Delete: (state, action) => {
      state.toppings = state.toppings.filter(
        (elem) => elem.id !== action.payload
      );
    },
    LetHimCook: (state, action) => {
      let cookedPizza = {
        newToppings: state.toppings,
        gluten: state.isGlutten,
      };
      state.toppings = [];
      state.pizza.push(cookedPizza);
    },
  },
});

export const { AddToppings, Delete, LetHimCook } = AddPizza.actions;

export default AddPizza.reducer;
