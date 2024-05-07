import React, { useRef } from "react";
import ReactDice from "react-dice-complete";

const MyDiceApp = () => {
  const reactDice = useRef(null);

  const rollDone = (totalValue, values) => {
    console.log("individual die values array:", values);
    console.log("total dice value:", totalValue);
  };

  const rollAll = () => {
    reactDice.current?.rollAll();
  };

  return (
    <ReactDice
      numDice={1}
      ref={reactDice}
      rollDone={rollDone}
      dotColor="black"
      faceColor="white"
    />
  );
};

export default MyDiceApp;