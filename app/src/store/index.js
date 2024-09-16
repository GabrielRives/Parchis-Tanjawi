import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gradientReducers from "./gradientSlice";



const store = configureStore({
  reducer: {
    gradient: gradientReducers,
    user: userSlice,


  },
});

export default store;
