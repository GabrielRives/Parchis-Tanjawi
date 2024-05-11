import React from "react";
import Popup from "reactjs-popup";
import './StartPopup.scss';
import dice from "/src/assets/iconDice.png";
import trophy from "/src/assets/tournament.png";
export default function StartPopup({}) {
  return (
    <Popup
      trigger={<button className="buttonStart">LANCER UNE PARTIE</button>}
      position="center center"
    >
      <div className="buttonStart__startGameContainer">
        <h2 className="buttonStart__startGameContainer__boxTitle">
          Choisissez votre mode de jeu
        </h2>{" "}
        <div className="buttonStart__startGameContainer__mode">
          <div className="buttonStart__startGameContainer__mode__duel">
            <h2>Duel</h2>
            <img
              src={dice}
              className="buttonStart__startGameContainer__mode__duel__icon"
            />
          </div>
          <div className="buttonStart__startGameContainer__mode__tournament">
            <h2>Tournoi</h2>
            <img
              src={trophy}
              className="buttonStart__startGameContainer__mode__tournament__icon"
            />
          </div>
        </div>
      </div>
    </Popup>
  );
}
