import { useState } from "react";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      <div className="board__topLane">
        <div className="board__topLane__yellowHouse"></div>
        <div className="board__topLane__topPath">
          <div className="board__topLane__topPath__leftColumn"></div>
          <div className="board__topLane__topPath__centerColumn"></div>
          <div className="board__topLane__topPath__rightColumn"></div>
        </div>
        <div className="board__topLane__blueHouse"></div>
      </div>
      <div className="board__midLane">
        <div className="board__midLane__leftPath">
          <div className="board__midLane__leftPath__topRow"></div>
          <div className="board__midLane__leftPath__centerRow"></div>
          <div className="board__midLane__leftPath__bottomRow"></div>
        </div>
        <div className="board__midLane__centerPath"></div>
        <div className="board__midLane__rightPath">
          <div className="board__midLane__rightPath__topRow"></div>
          <div className="board__midLane__rightPath__centerRow"></div>
          <div className="board__midLane__rightPath__bottomRow"></div>
        </div>
      </div>
      <div className="board__BotLane">
        <div className="board__BotLane__greenHouse"></div>
        <div className="board__BotLane__bottomPath">
          <div className="board__BotLane__bottomPath__leftColumn"></div>
          <div className="board__BotLane__bottomPath__centerColumn"></div>
          <div className="board__BotLane__bottomPath__rightColumn"></div>
        </div>
        <div className="board__BotLane__redHouse"></div>
      </div>
    </div>
  );
}
