import { configureStore } from "@reduxjs/toolkit";
import addblogSlice from "./Slicers/AddblogSlice";
export const store = configureStore({
  reducer: {
    blogs: addblogSlice,
  },
});
