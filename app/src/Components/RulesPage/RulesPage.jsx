import "./RulesPage.scss";
import { Link } from "react-router-dom";
import diceLogo from "/src/assets/dice.svg";
import NavBar from "/src/Home/NavBar/NavBar.jsx";
import Introduction from "./Introduction/Introduction";
import HowToPlay from "./HowToPlay/HowToPlay";
import Movement from "./Movement/Movement";
import Movement2 from "./Movement2/Movement2";
import Doors from "./Doors/Doors";

function RulesPage() {
  return (
    <div className="rulesPage">
      <div className="rulesPage__rulesHeader">
        <Link to="/">
          <img src={diceLogo} className="logoDie" alt="Logo Dice" />
        </Link>
        <h1 className="rulesPage__rulesHeader__title">Règles du Parchis</h1>
      </div>
      <div className="rulesPage__rulesBody">
        <NavBar />
        <div className="rulesPage__rulesBody__rulesSections">
          <Introduction />
          <HowToPlay />
          <Movement />
          <Movement2 />
          <Doors />
        </div>
      </div>
      <div className="rulesPage__rulesBody"></div>
    </div>
  );
}

export default RulesPage;
