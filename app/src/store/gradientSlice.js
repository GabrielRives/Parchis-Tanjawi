import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  firstColor: "#087d00", //voir ici pour utiliser sass a la place des Hex-code en dur
  secondColor: "#c40000",
  thirdColor: "#ffc700",
  fourthColor: "#0047c4",
  direction: "105deg",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  width: "100%",
  height: "100vh",
  position: "fixed",
  zIndex: "-2",
};

const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    changeColors: (state, action) => {
      //recupération du payload de mon action
      const {
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        direction,
        backgroundSize,
        animation,
        width,
        height,
        position,
        zIndex,
      } = action.payload;
      return {
        ...state,
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        direction,
        backgroundSize,
        animation,
        width,
        height,
        position,
        zIndex,
      };
    },

  },
});

export const { changeToDarkMode, changeToLightMode, changeColors } =
  gradientSlice.actions;

export default gradientSlice.reducer;
