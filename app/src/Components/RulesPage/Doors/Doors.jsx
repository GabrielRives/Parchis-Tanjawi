import './Doors.scss';
import React from "react";
import Popup from "reactjs-popup";
import dice from "/src/assets/iconDice.png";

function Doors() {
    return (
      <Popup
        trigger={<button className="doorsPopup">Les Portes</button>}
        position="bottom right"
      >
        <div className="doorsField">
          <div className="doorsField__leftColumn">
            <div className="doorsField__leftColumn__segment1">
              <img
                src={dice}
                className="doorsField__leftColumn__segment1__icon"
              />
              <p className="doorsField__leftColumn__segment1__text">
                Si le joueur ayant fait 6 possède une porte fermée et PEUT
                l'ouvrir, celle-ci prend la priorité sur tout le reste, le
                joueur DOIT ouvrir la porte.
                <br></br>
              </p>
            </div>
            <div className="doorsField__leftColumn__segment1">
              <img
                src={dice}
                className="doorsField__leftColumn__segment1__icon"
              />
              <p className="doorsField__leftColumn__segment1__text">
                Si le joueur ayant fait 6 possède plusieurs portes fermées, la
                priorité reste à l'ouverture de l'une d'elle. Le joueur DOIT
                alors en priorité ouvrir une des portes ouvrables en 12, s'il
                n'en existe pas ou que le mouvement ne peut pas être complété,
                le joueur ouvre alors une porte en 6 pouvant être ouverte sur ce
                nombre de cases.
              </p>
            </div>
            <div className="doorsField__leftColumn__segment1">
              <img
                src={dice}
                className="doorsField__leftColumn__segment1__icon"
              />
              <p className="doorsField__leftColumn__segment1__text">
                <strong>
                  Les portes n'existent ici que si elles sont fermées.{" "}
                </strong>
                <br></br>
                Les bab (portes) ne peuvent pas être franchies, un pion coincé
                derrière une porte ne pourra pas effectuer un déplacement qui va
                au delà.
              </p>
            </div>
            <div className="doorsField__leftColumn__segment1">
              <img
                src={dice}
                className="doorsField__leftColumn__segment1__icon"
              />
              <p className="doorsField__leftColumn__segment1__text">
                Tant que les 2 fichas la composant appartiennent au même camps,
                une porte peut être crée sur n'importe quelle case.
                <br></br>
                Sur une case sécurité, une porte peut être créée par des fichas
                n'appartenant pas au même camps, puisqu'il est impossible de
                manger une ficha adverse sur une case de sécurité.
              </p>
            </div>
          </div>

          <div className="doorsField__rightColumn">
            <div className="doorsField__rightColumn__segment1">
              <img
                src={dice}
                className="doorsField__rightColumn__segment1__icon"
              />
              <p className="doorsField__rightColumn__segment1__text">
                Une bab peut être ouverte par le joueur la possédant ( ou le cas
                échéant y participant) avec n'importe jet de dé, mais DOIT être
                ouverte si le score au dé est de 6.
              </p>
            </div>
            <div className="doorsField__rightColumn__segment1">
              <img
                src={dice}
                className="doorsField__rightColumn__segment1__icon"
              />
              <p className="doorsField__rightColumn__segment1__text">
                Une bab ne peut être ouverte que si le joueur peut finir son
                mouvement avec la ficha. Si une autre bab, ou tout autre
                situation empêche le mouvement complet, alors l'ouverture de
                cette porte n'est pas possible.
              </p>
            </div>
            <div className="doorsField__rightColumn__segment1">
              <img
                src={dice}
                className="doorsField__rightColumn__segment1__icon"
              />
              <p className="doorsField__rightColumn__segment1__text">
                Un joueur à le droit de volontairement positionner des portes
                proches les unes des autres, voir même immédiatement en contact,
                pour limiter les chances d'ouvrir une porte en particulier,
                puisqu'un 6 entraîne l'ouverture d'UNE porte.
              </p>
            </div>
            <div className="doorsField__rightColumn__segment1">
              <img
                src={dice}
                className="doorsField__rightColumn__segment1__icon"
              />
              <p className="doorsField__rightColumn__segment1__text">
                <strong>La porte de la mort</strong> <i>"bab almawt"</i>: est
                une configuration <strong>archaïque</strong> mais efficace où un
                joueur ferme deux portes dans sa colonne de sortie ( dont une à
                la base) afin de ne pas avoir à ouvrir automatiquement en 6 et
                de controler le passage de l'adversaire.
              </p>
            </div>
          </div>
        </div>
      </Popup>
    );
    
}

export default Doors;