import './Movement2.scss';
import React from "react";
import Popup from "reactjs-popup";
import dice from "/src/assets/iconDice.png";

function Movement2() {
    return (
      <Popup
        trigger={<button className="movementPopupTwo">Déplacements II</button>}
        position="bottom center"
      >
        <div className="movementField2">
          <div className="movementField2__leftColumn">
            <div className="movementField2__leftColumn__segment1">
              <img
                src={dice}
                className="movementField2__leftColumn__segment1__icon"
              />
              <p className="movementField2__leftColumn__segment1__text">
                AUCUN mouvement ne permet de franchir une "porte" fermée, que ce
                soit une porte possédée par l'adversaire ou par le joueur
                lui-même. (Voir section "Les Portes")
                <br></br>
              </p>
            </div>
            <div className="movementField2__leftColumn__segment1">
              <img
                src={dice}
                className="movementField2__leftColumn__segment1__icon"
              />
              <p className="movementField2__leftColumn__segment1__text">
                <strong>Règles du 6:</strong> La notion de priorité de jeu va
                être importante dans cette section. (Quelle règle passe avant
                quelle autre règle)
                <br></br>
                <strong>Sur 5</strong>, le joueur déplace un pion de 5 cases
                UNIQUEMENT si les conditions le permettent ( voir Règles du 5
                pour les conditions.)
                <br></br>
                <br></br>
                Le 6 entraîne une relance du dé, jusqu'à{" "}
                <strong>trois fois</strong> maximum, avec à la troisème une
                ficha perdue ou un passage de tour ( voir Déplacements).
                <br></br>
                <strong>
                  SI le joueur ne possède pas 4 pions de la même couleur sur le
                  terrain:
                </strong>
                <li>
                  la priorité entre les deux couleurs est la même, le joueur est
                  libre de choisir la ficha qu'il veut avancer.
                </li>
                <li>Il avance une ficha de 6 cases et relance le dé.</li>
                <strong>
                  Si le joueur possède 4 pions d'une même couleur sur le
                  terrain, la priorité ira a cette couleur:
                </strong>
                <li>
                  Le joueur choisira une ficha parmi cette couleur majoritaire
                  et s'il PEUT faire ce mouvement avancera de 12 cases avant de
                  relancer le dé.
                </li>
              </p>
            </div>
          </div>

          <div className="movementField2__rightColumn">
            <div className="movementField2__rightColumn__segment1">
              <img
                src={dice}
                className="movementField2__rightColumn__segment1__icon"
              />
              <p className="movementField2__rightColumn__segment1__text">
                <li>
                  Si aucune des fichas de la couleur prioritaire ne peut faire
                  un mouvement complet de 12 cases, la priorité est cassée et le
                  joueur choisit une ficha de la couleur de son choix ( parmi
                  les siennes) et l'avance de 6 avant de relancer le dé.
                </li>
                <strong>
                  Si le joueur possède ses 8 fichas sur le terrain, il n'a plus
                  de priorité entre les deux couleurs:
                </strong>
                <li>
                  Le joueurs avance de 12 une ficha de son choix qui PEUT faire
                  ce mouvement.
                </li>
              </p>
            </div>
            <div className="movementField2__rightColumn__segment1">
              <img
                src={dice}
                className="movementField2__rightColumn__segment1__icon"
              />
              <p className="movementField2__rightColumn__segment1__text">
                Si le joueur ayant fait 6 possède une ou plusieurs porte(s)
                fermée(s), alors l'ouverture d'une porte prend la priorité sur
                tout. (voir "Les Portes")
              </p>
            </div>
            <div className="movementField2__rightColumn__segment1">
              <img
                src={dice}
                className="movementField2__rightColumn__segment1__icon"
              />
              <p className="movementField2__rightColumn__segment1__text">
                <strong>ATTENTION:</strong> dans la majorité absolue des cas le
                6 entraîne la relance du dé ( avec les règles déjà vues), il y a
                une seule exception immédiate à cette règle: si un joueur
                possède 4 fichas de la même couleur sur le terrain et doit donc
                avancer en 12, <strong>MAIS</strong> choisit de sacrifier son
                mouvement pour
                <strong>MANGER</strong> une ficha adverse en 6, il renvoie la
                ficha adverse à la maison, compte 20 avec une ficha pouvant
                effectuer ce mouvement
                <strong>MAIS NE RELANCE PAS LE DE</strong> et finit son tour.
              </p>
            </div>
          </div>
        </div>
      </Popup>
    );
    
}

export default Movement2;