import { useState } from "react";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      {/*Debut  toplane ---------------------------------------------------------------------------------------------------------------------------------------------------------- toplane */}
      <div className="board__topLane">
        <div className="board__topLane__yellowHouse"></div>
        <div className="board__topLane__topPath">
          <div className="board__topLane__topPath__leftColumn">
            <div
              className="board__topLane__topPath__leftColumn__case18"
              id="18"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case19"
              id="19"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case20"
              id="20"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case21"
              id="21"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case22"
              id="22"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case23"
              id="23"
            ></div>
            <div
              className="board__topLane__topPath__leftColumn__case24"
              id="24"
            ></div>
          </div>
          <div className="board__topLane__topPath__centerColumn">
            <div
              className="board__topLane__topPath__centerColumn__case17"
              id="17"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow1"
              id="18Y"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow2"
              id="19Y"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow3"
              id="20Y"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow4"
              id="21Y"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow5"
              id="22Y"
            ></div>
            <div
              className="board__topLane__topPath__centerColumn__caseYellow6"
              id="23Y"
            ></div>
          </div>
          <div className="board__topLane__topPath__rightColumn">
            <div
              className="board__topLane__topPath__rightColumn__case16"
              id="16"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case15"
              id="15"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case14"
              id="14"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case13"
              id="13"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case12"
              id="12"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case11"
              id="11"
            ></div>
            <div
              className="board__topLane__topPath__rightColumn__case10"
              id="10"
            ></div>
          </div>
        </div>
        <div className="board__topLane__blueHouse"></div>
      </div>
      {/*Fin  toplane ---------------------------------------------------------------------------------------------------------------------------------------------------------- toplane */}

      {/*Debut  Midlane ---------------------------------------------------------------------------------------------------------------------------------------------------------- Midlane */}
      <div className="board__midLane">
        <div className="board__midLane__leftPath">
          <div className="board__midLane__leftPath__topRow">
            <div
              className="board__midLane__leftPath__topRow__case33"
              id="33"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case32"
              id="32"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case31"
              id="31"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case30"
              id="30"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case29"
              id="29"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case28"
              id="28"
            ></div>
            <div
              className="board__midLane__leftPath__topRow__case27"
              id="27"
            ></div>
          </div>
          <div className="board__midLane__leftPath__centerRow">
            <div
              className="board__midLane__leftPath__centerRow__case34"
              id="34"
            ></div>
            <div className="board__midLane__leftPath__centerRow__caseGreen"></div>
            <div className="board__midLane__leftPath__centerRow__caseGreen"></div>
            <div className="board__midLane__leftPath__centerRow__caseGreen"></div>
            <div className="board__midLane__leftPath__centerRow__caseGreen"></div>
            <div className="board__midLane__leftPath__centerRow__caseGreen"></div>
            <div className="board__midLane__leftPath__centerRow__caseGreenEnd"></div>
          </div>
          <div className="board__midLane__leftPath__bottomRow">
            <div
              className="board__midLane__leftPath__bottomRow__case35"
              id="35"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case36"
              id="36"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case37"
              id="37"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case38"
              id="38"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case39"
              id="39"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case40"
              id="40"
            ></div>
            <div
              className="board__midLane__leftPath__bottomRow__case41"
              id="41"
            ></div>
          </div>
        </div>
        <div className="board__midLane__centerPath"></div>
        <div className="board__midLane__rightPath">
          <div className="board__midLane__rightPath__topRow">
            <div
              className="board__midLane__rightPath__topRow__case7"
              id="7"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case6"
              id="6"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case5"
              id="5"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case4"
              id="4"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case3"
              id="3"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case2"
              id="2"
            ></div>
            <div
              className="board__midLane__rightPath__topRow__case1"
              id="1"
            ></div>
          </div>
          <div className="board__midLane__rightPath__centerRow">
            <div className="board__midLane__rightPath__centerRow__caseBlueEnd"></div>
            <div className="board__midLane__rightPath__centerRow__caseBlue"></div>
            <div className="board__midLane__rightPath__centerRow__caseBlue"></div>
            <div className="board__midLane__rightPath__centerRow__caseBlue"></div>
            <div className="board__midLane__rightPath__centerRow__caseBlue"></div>
            <div className="board__midLane__rightPath__centerRow__caseBlue"></div>
            <div
              className="board__midLane__rightPath__centerRow__case68"
              id="68"
            ></div>
          </div>
          <div className="board__midLane__rightPath__bottomRow">
            <div
              className="board__midLane__rightPath__bottomRow__case61"
              id="61"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case62"
              id="62"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case63"
              id="63"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case64"
              id="64"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case65"
              id="65"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case66"
              id="66"
            ></div>
            <div
              className="board__midLane__rightPath__bottomRow__case67"
              id="67"
            ></div>
          </div>
        </div>
      </div>
      {/*Fin  Midlane ---------------------------------------------------------------------------------------------------------------------------------------------------------- Midlane */}

      {/*Debut  Botlane ---------------------------------------------------------------------------------------------------------------------------------------------------------- Midlane */}
      <div className="board__BotLane">
        <div className="board__BotLane__greenHouse"></div>
        <div className="board__BotLane__bottomPath">
          <div className="board__BotLane__bottomPath__leftColumn">
            <div
              className="board__BotLane__bottomPath__leftColumn__case44"
              id="44"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case45"
              id="45"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case46"
              id="46"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case47"
              id="47"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case48"
              id="48"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case49"
              id="49"
            ></div>
            <div
              className="board__BotLane__bottomPath__leftColumn__case50"
              id="50"
            ></div>
          </div>
          <div className="board__BotLane__bottomPath__centerColumn">
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed6"
              id="57R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed5"
              id="56R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed4"
              id="55R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed3"
              id="54R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed2"
              id="53R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__caseRed1"
              id="52R"
            ></div>
            <div
              className="board__BotLane__bottomPath__centerColumn__case51"
              id="51"
            ></div>
          </div>
          <div className="board__BotLane__bottomPath__rightColumn">
            <div
              className="board__BotLane__bottomPath__rightColumn__case58"
              id="58"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case57"
              id="57"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case56"
              id="56"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case55"
              id="55"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case54"
              id="54"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case53"
              id="53"
            ></div>
            <div
              className="board__BotLane__bottomPath__rightColumn__case52"
              id="52"
            ></div>
          </div>
        </div>
        <div className="board__BotLane__redHouse"></div>
      </div>
      {/*Fin Botlane ---------------------------------------------------------------------------------------------------------------------------------------------------------- Midlane */}
    </div>
  );
}
