import "./HowToPlay.scss";
import React from "react";
import Popup from "reactjs-popup";
import dice from "/src/assets/iconDice.png";

function Introduction() {
  return (
    <Popup
      trigger={<button className="howToPlayPopup">Déroulement</button>}
      position="bottom center"
    >
      <div className="howToPlayField">
        <div className="howToPlayField__leftColumn">
          <div className="howToPlayField__leftColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__leftColumn__segment1__icon"
            />
            <p className="howToPlayField__leftColumn__segment1__text">
              Au démarrage de la partie chaque joueur réunit ses 8 pions dans la
              maison à sa droite du plateau: la maison rouge pour celui qui a
              pris rouge/vert, la maison jaune pour celui qui a pris jaune/bleu.
              <br></br>
            </p>
          </div>
          <div className="howToPlayField__leftColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__leftColumn__segment1__icon"
            />
            <p className="howToPlayField__leftColumn__segment1__text">
              Le joueur qui commence la partie est celui qui a pris "Maghreb"
              (pions rouges et verts).
              <br></br>A leur premier tour, chaque joueur choisit par quelle
              couleur il va commencer à jouer (joueur 1: rouge ou vert, joueur
              2: jaune ou bleu).
            </p>
          </div>
          <div className="howToPlayField__leftColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__leftColumn__segment1__icon"
            />
            <p className="howToPlayField__leftColumn__segment1__text">
              Un tour de joueur se déroule de la manière suivante:
              <ul>
                <li>Il s'assure que l'adversaire a bien fini son tour.</li>
                <li>Il lance le dé et effectue son mouvement avec une ficha</li>
                <li>S'il fait 6, il relance le dé.</li>
                <li>
                  S'il sort une ficha du jeu, il effectue le mouvement bonus
                  associé.
                </li>
                <li>
                  S'il tue une ficha en jeu de l'adversaire, il effectue le
                  mouvement bonus associé.
                </li>
                <li>Déclare la fin de son tour.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="howToPlayField__rightColumn">
          <div className="howToPlayField__rightColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__rightColumn__segment1__icon"
            />
            <p className="howToPlayField__rightColumn__segment1__text">
              <strong>La règle du 5:</strong>
              <br></br>
              Au delà du tour 1 quand le joueur fait un 5 sur le dé, il
              DOIT faire sortir un ficha de sa maison, même si ça l'empêche de
              bouger une autre ficha.
            </p>
          </div>
          <div className="howToPlayField__rightColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__rightColumn__segment1__icon"
            />
            <p className="howToPlayField__rightColumn__segment1__text">
              Dans le cas il n'y a plus de fichas dans la maison le joueur
              avance juste une de ses fichas présentes sur le terrain de 5
              cases.
            </p>
          </div>
          <div className="howToPlayField__rightColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__rightColumn__segment1__icon"
            />
            <p className="howToPlayField__rightColumn__segment1__text">
              Si un joueur a déjà 2 fichas ( quelques soient leurs couleurs) sur
              la case de de sécurité de la maison, il NE peut PAS en sortir une
              troisième et doit donc avancer une autre fichas sur le terrain de
              5 cases.
            </p>
          </div>
          <div className="howToPlayField__rightColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__rightColumn__segment1__icon"
            />
            <p className="howToPlayField__rightColumn__segment1__text">
              Si un joueur pouvait "manger" un pion adverse en  5 cases,
              mais qu'il PEUT sortir une ficha, alors il DOIT sortir une ficha
              de la maison et ne peut pas manger le pion.
            </p>
          </div>
          <div className="howToPlayField__rightColumn__segment1">
            <img
              src={dice}
              className="howToPlayField__rightColumn__segment1__icon"
            />
            <p className="howToPlayField__rightColumn__segment1__text">
              Si un joueur laisse des pions sur la case sécurité liée à la
              maison de son adversaire ( 1 ou 2) et que son adversaire fait 5,
              il est tenu de sortir une ficha, ce qui mange la ou les fichas de
              son adversaire.
            </p>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default Introduction;
