import "./Introduction.scss";
import React from "react";
import Popup from "reactjs-popup";
import dice from "/src/assets/iconDice.png";

function Introduction() {
  return (
    <Popup
      trigger={<button className="introPopup">Introduction au jeu</button>}
      position="bottom left"
    >
      <div className="introductionField">
        <div className="introductionField__leftColumn">
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Le parchis se joue avec 16 pions, un dé à 6 faces et un plateau de
              jeu.
              <br></br>
              Les pions (fichas) sont divisés en quatre groupes de 4 couleurs,
              respectivement rouge, vert, bleu et jaune.
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Deux joueurs s'affrontent en possédant deux sets de pions chacun.
              <br></br>
              Soit les rouge et vert (Maghreb), soit les bleus et jaunes. Le but
              du jeu étant de faire faire le tour du plateau à tout ses pions.
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Le gagnant est donc celui qui réussit en premier à faire sortir
              vers la deuxième "maison" l'ensemble de ses pions .<br></br>
              Une victoire est une victoire, mais celle appréciée et respectée
              par les joueurs est celle où le gagnant remporte sa victoire sur
              un 1 au dé (dado).
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Le parchis est un jeu civilisé et d'un grand rafinement où la
              notion de "triche" n'est pas interdite.<br></br>
              Toutefois, un joueur surpris à tricher par son adversaire (et
              seulement lui) doit s'excuser platement et remettre sa "ficha" à
              la place correcte.
            </p>
          </div>
        </div>

        <div className="introductionField__rightColumn">
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Les joueurs se réfèrent en général aux différents éléments du jeu
              par leurs noms espagnols/tangérois.
              <br></br>
              Ci-dessous un bref listing du jargon usuel.
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Maison = <strong>Mison</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Le
              dé = <strong>dado</strong>
              <br></br>
              Le(s) pion(s) = <strong>ficha(s)</strong>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Un (sur le dé)={" "}
              <strong>Pito</strong>
              <br></br>
              deux, trois, quatre, cinq et six ={" "}
              <strong>dos, tres, cuatro, cinco, seis</strong>
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              <stong>Pito pito:</stong> situation typique en fin de partie, où les deux
              joueurs sont à un jet de dé de la victoire et où chacun doit faire 1 (pito)
              pour gagner.
              <br></br>
             C'est dans ce cas là évidemment le premier à faire 1 qui l'emporte.
            </p>
          </div>
          <div className="introductionField__leftColumn__segment1">
            <img
              src={dice}
              className="introductionField__leftColumn__segment1__icon"
            />
            <p className="introductionField__leftColumn__segment1__text">
              Un glossaire plus fourni et vivant sera implémenté dans l'avenir,
              qui sera constitué avec la participation de nos joueurs les plus 
              expérimentés et émérites<br></br>
             "Soyez patients, bisous -- La direction"
            </p>
          </div>
        </div>
      </div>
    </Popup>
  );
}

export default Introduction;
