import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  popup: "",
  
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changePopup: (state, action) => ({
      ...state,
      popup: action.payload,
    })}})




export const { changePopup } = userSlice.actions;

export default userSlice.reducer;