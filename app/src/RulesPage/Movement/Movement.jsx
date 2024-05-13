import './Movement.scss';
import React from "react";
import Popup from "reactjs-popup";
import dice from "/src/assets/iconDice.png";

function Movement() {
    return (
      <Popup
        trigger={<button className="movementPopup">Déplacements I</button>}
        position="bottom center"
      >
        <div className="movementField">
          <div className="movementField__leftColumn">
            <div className="movementField__leftColumn__segment1">
              <img
                src={dice}
                className="movementField__leftColumn__segment1__icon"
              />
              <p className="movementField__leftColumn__segment1__text">
                Les déplacements se font uniquement vers l'avant, pas de retour
                en arrièrre possible. De plus, une ficha ne peut être avancée
                que si elle est en mesure de faire intégralement le mouvement
                indiqué par le dé.
                <br></br>
              </p>
            </div>
            <div className="movementField__leftColumn__segment1">
              <img
                src={dice}
                className="movementField__leftColumn__segment1__icon"
              />
              <p className="movementField__leftColumn__segment1__text">
                <strong>Sur 1, 2, 3 et 4</strong> le joueur avance un pion du
                montant indiqué par le dé.
                <br></br>
                <strong>Sur 5</strong>, le joueur déplace un pion de 5 cases
                UNIQUEMENT si les conditions le permettent ( voir Règles du 5
                pour les conditions.)
              </p>
            </div>
            <div className="movementField__leftColumn__segment1">
              <img
                src={dice}
                className="movementField__leftColumn__segment1__icon"
              />
              <p className="movementField__leftColumn__segment1__text">
                <strong>Sur 6</strong> le déplacement peut varier entre 6 et 12
                cases selon les priorités/conditions ( voir règles du 6).
                <br></br> Le joueur qui fait 6 au dé relance le dé.
                <br></br>
                <strong>Si le deuxième jet retombe sur 6</strong>, il obéit aux
                mêmes règles que le premier. Le joueur relance pour une troisème
                et dernière fois.
                <br></br>
                <strong>Si le troisième jet tombe sur un score de 1 à 5</strong>
                , la résulation suit les règles habituelles, mais{" "}
                <strong>s'il tombe sur 6</strong> le joueur observe le dernier
                pion qu'il a bougé ( lors du 2ème 6)si le pion n'est pas sur une
                case sécurisée ou dans la colonne menant à la sortie du plateau,
                la ficha est tuée et retourne à la maison de départ. Si le pion
                est sécurisé, le joueur passe son tour et l'adversaire commence
                le sien.
              </p>
            </div>
          </div>

          <div className="movementField__rightColumn">
            <div className="movementField__rightColumn__segment1">
              <img
                src={dice}
                className="movementField__rightColumn__segment1__icon"
              />
              <p className="movementField__rightColumn__segment1__text">
                <strong>Compter en 10 : </strong>
                Lorsque le joueur fait monter une ficha dans sa colonne de
                sortie et fait sortir celle-ci, elle est HORS du jeu. En échange
                le joueur choisit ensuite une de ses fichas sur le plateau et
                l'avance de 10 cases. Si le mouvement de 10 cases venait à être
                impossible, ce mouvement est gaspillé et ne peut pas être
                reporté.
                <br></br>
                Sortir une ficha pour compter 10 peut permettre de sortir une
                autre ficha étant à 10 cases de la sortie. L'effet donnant 10
                cases de déplacement se répète alors.
                <br></br>
                Il est possible de "manger" une ficha adverse en comptant 10.
              </p>
            </div>
            <div className="movementField__rightColumn__segment1">
              <img
                src={dice}
                className="movementField__rightColumn__segment1__icon"
              />
              <p className="movementField__rightColumn__segment1__text">
                <strong>Compter en 20 : </strong>
                Lorsqu'un joueur "mange" une ficha adverse, cette dernière
                retourne à se maison d'origine. Le joueur ayant mangé choisit
                alors une ficha POUVANT avancer de 20 cases et l'avance de ce
                montant.
                <br></br>
                Compter 20 peut permettre de sortir une ficha directement par la
                sortie si la distance est exactement de 20 cases. si tel est le
                cas, le joueur compte alors 10 pour la ficha sortie.
                <br></br>
                Un joueur comptant 20 et mangeant une autre ficha de
                l'adversaire comptera 20 à nouveau ( Tant qu'il PEUT
                effectuer ce mouvement).
              </p>
            </div>
          </div>
        </div>
      </Popup>
    );
    
}

export default Movement;