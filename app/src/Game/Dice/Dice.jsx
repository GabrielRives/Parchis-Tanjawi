// Dice.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDice from "react-dice-complete";

function Dice({ onRoll }) {
  const [position, setPosition] = useState(0);
  const [hasRolled, setHasRolled] = useState(false); // Nouvel état pour vérifier si le dé a été roulé

  const rollDone = (totalValue) => {
    // Mettre à jour hasRolled pour indiquer que le dé a été roulé
    setHasRolled(true);

    if (hasRolled) {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + totalValue;
        // Appelle la fonction de rappel avec la nouvelle position
        if (onRoll) onRoll(newPosition);
        return newPosition;
      });
    } else {
      // Position reste inchangée si le dé n'a pas encore été roulé
      if (onRoll) onRoll(position); // Appelle la fonction de rappel avec la position actuelle (0 si pas encore roulé)
    }
  };

  return (
    <div className="dice">
      <ReactDice
        numDice={1}
        rollDone={rollDone}
        dotColor="black"
        faceColor="beige"
        dieCornerRadius={2}
        dieSize={60}
        outline
        rollTime={1}
      />
      <p>Current Position: {position}</p>
    </div>
  );
}

Dice.propTypes = {
  onRoll: PropTypes.func,
};

export default Dice;
