// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDice from "react-dice-complete";
import { parcoursPlayer1 } from "./Data/dataCases"; // Import des cases
// eslint-disable-next-line no-unused-vars
import FichaRed1 from "../Game/Fichas/FichaRed1";

import "./TestGameplay.scss";

const CaseNavigator = ({ onRoll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);

  // Effet pour gérer le changement de background sur la case courante
  useEffect(() => {
    parcoursPlayer1.forEach((_, i) => {
        const element = document.getElementById(`case_${parcoursPlayer1[i].name}`);
      if (element) {
        element.classList.remove("active");
           element.innerHTML = "";
      }
    });

    // Ajouter la classe active à la case actuelle
    const currentElement = document.getElementById(`case_${parcoursPlayer1[currentIndex].name}`);
    if (currentIndex !== 0 || hasRolled) {
      currentElement.classList.add("active");
      currentElement.innerHTML = ""; // S'assurer qu'il est vide avant d'ajouter le pion
      currentElement.appendChild(document.createElement("div")).classList.add("fichared1");
    }
  }, [currentIndex, hasRolled]);

  const rollDone = (totalValue) => {
    // Mettre à jour hasRolled pour indiquer que le dé a été roulé
    setHasRolled(true);
    if (hasRolled) {
      setCurrentIndex((prevIndex) => {
        const newPosition = (prevIndex + totalValue) % parcoursPlayer1.length; // Assurer un cycle
        // Appelle la fonction de rappel avec la nouvelle position
        if (onRoll) onRoll(newPosition);
        return newPosition;
      });
    } else {
      // Position reste inchangée si le dé n'a pas encore été roulé
      if (onRoll) onRoll(currentIndex);
    }
  };

  return (
    <div>
      <h1>Current Case: {parcoursPlayer1[currentIndex].name}</h1>

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

      {/* Affichage conditionnel du pion dans la case courante */}
    
    </div>
  );
};

CaseNavigator.propTypes = {
  onRoll: PropTypes.func,
};

export default CaseNavigator;
