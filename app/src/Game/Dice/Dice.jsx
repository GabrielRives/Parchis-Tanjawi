// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import ReactDice from "react-dice-complete";

function Dice() {
  const reactDice = useRef(null);
  const [isPositionedAt, setIsPositionedAt] = useState(0);

  // Reset the position on page refresh using localStorage
  useEffect(() => {
    // Clear the localStorage or reset the value to 0 when the page is loaded or refreshed
    localStorage.setItem("dicePosition", 0);
    setIsPositionedAt(0); // Also reset the state
  }, []);

  const rollDone = (totalValue) => {
    setIsPositionedAt((prevPosition) => {
      const newPosition = prevPosition + totalValue;
      console.log("Updated position:", newPosition);

      // Store the new position in localStorage
      localStorage.setItem("dicePosition", newPosition);

      return newPosition;
    });
  };

  return (
    <div className="dice">
      <ReactDice
        numDice={1}
        ref={reactDice}
        rollDone={rollDone}
        dotColor="black"
        faceColor="beige"
        dieCornerRadius={2}
        dieSize={60}
        outline
        rollTime={1}
      />
      <p>Current Position: {isPositionedAt}</p>
    </div>
  );
}

export default Dice;
