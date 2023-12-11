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
    },
    editblog: (state , action) =>{
        
    }
  },
});

export const { sendblog } = addblogSlice.actions;

export default addblogSlice.reducer;
