import { Link } from 'react-router-dom';
import React from "react";
import Popup from "reactjs-popup";
import diceLogo from "/src/assets/dice.svg";
import Login from '../Login/Login';
import './Header.scss'
export default function Header() {
  return (
    <div className="header">
      <div className="header__logoTitle">
        <Link to="/">
          <img src={diceLogo} className="logoDie" alt="Logo Dice" />
        </Link>
        <h1 className="header__logoTitle__titleGame"> Parchis Tanjawi</h1>
      </div>
      <div className="header__logSpace">
      <Popup
      trigger={
        <button className="header__logSpace__buttonLog">Se connecter</button>
      } position="bottom right">
        <Login/>
      </Popup>
        <button className="header__logSpace__buttonLog">S'inscrire</button>
      </div>
    </div>
  );
}
