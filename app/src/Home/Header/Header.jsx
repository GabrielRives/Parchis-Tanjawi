import { Link } from 'react-router-dom';
import diceLogo from "/src/assets/dice.svg";
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
        <button className="header__logSpace__buttonLog">Se connecter</button>
        <button className="header__logSpace__buttonLog">S'inscrire</button>
      </div>
    </div>
  );
}
