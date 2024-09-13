// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactDice from "react-dice-complete";
import { parcoursPlayer1 } from "./Data/dataCases";
import FichaRed1 from "./Fichas/FichaRed1";

const CaseNavigator = ({ onRoll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);

  const rollDone = (totalValue) => {
    // Mettre à jour hasRolled pour indiquer que le dé a été roulé
    setHasRolled(true);
    if (hasRolled) {
      setCurrentIndex((prevIndex) => {
        const newPosition = prevIndex + totalValue %parcoursPlayer1;
        // Appelle la fonction de rappel avec la nouvelle position
        if (onRoll) onRoll(newPosition);
        return newPosition;
      });
    } else {
      // Position reste inchangée si le dé n'a pas encore été roulé
      if (onRoll) onRoll(currentIndex); // Appelle la fonction de rappel avec la position actuelle (0 si pas encore roulé)
    }
  };

  return (
    <div>
      <h1>Current Case: {parcoursPlayer1[currentIndex].name}</h1>
      <FichaRed1 currentIndex={currentIndex} />
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
      </div>
    </div>
  );
};

CaseNavigator.propTypes = {
  onRoll: PropTypes.func,
};

export default CaseNavigator;
