import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addblogSlice = createSlice({
  name: "blogs",
  initialState: {
    text: "",
  },
  reducers: {
    sendblog: (state, action) => {
      let obj = {
        text: action.payload,
      };
      console.log(obj);
      axios.post("http://localhost:3000/blogs", obj);
      2;
    },
    editblog: (state, action) => {
      state.text = action.payload.editInput;
      axios.patch(`http://localhost:3000/blogs/${action.payload.blogId}`, {
        text: state.text,
      });
    },
    deleteblog: (state, action) => {
      console.log(action.payload);
      axios.delete(`http://localhost:3000/blogs/${action.payload}`);
    },
  },
});

export const { sendblog, editblog, deleteblog } = addblogSlice.actions;

export default addblogSlice.reducer;
