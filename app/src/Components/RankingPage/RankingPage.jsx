import "./RankingPage.scss";
import { Link } from "react-router-dom";
import diceLogo from "/src/assets/dice.svg";
import medal from "/src/assets/medal.svg";
import NavBar from "/src/Home/NavBar/NavBar.jsx";

function Ranking() {
  return (
    <div className="rankingPage">
      <div className="rankingPage__rankHeader">
        <Link to="/">
          <img src={diceLogo} className="logoDie" alt="Logo Dice" />
        </Link>
        <h1 className="rankingPage__rankHeader__title">Classement : Top 5</h1>
      </div>
      <div className="rankingPage__rankBody">
        <NavBar />
        <div className="rankingPage__rankBody__chart">
          <div className="rankingPage__rankBody__chart__top1" id="top1">
            <h1 className="rankingPage__rankBody__chart__top1__medalIcon">I</h1>
            <h1 className="rankingPage__rankBody__chart__top1__nickName">
              The_Great_Tanjawi
            </h1>
            <div className="rankingPage__rankBody__chart__top1__scores">
              <h1 className="rankingPage__rankBody__chart__top1__scores__victory">
                8
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top1__scores__defeats">
                2
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top1__scores__kills">
                24
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top1__scores__ratio">
                {Math.round((8 / 10) * 100) + "%"}
              </h1>
            </div>
          </div>

          <div className="rankingPage__rankBody__chart__top2" id="top2">
            <h1 className="rankingPage__rankBody__chart__top2__medalIcon">
              II
            </h1>
            <h1 className="rankingPage__rankBody__chart__top2__nickName">
              OnMyWayToAgadir
            </h1>
            <div className="rankingPage__rankBody__chart__top2__scores">
              <h1 className="rankingPage__rankBody__chart__top2__scores__victory">
                6
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top2__scores__defeats">
                3
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top2__scores__kills">
                17
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top2__scores__ratio">
                {Math.round((6 / 9) * 100) + "%"}
              </h1>
            </div>
          </div>

          <div className="rankingPage__rankBody__chart__top3" id="top3">
            <h1 className="rankingPage__rankBody__chart__top3__medalIcon">
              III
            </h1>
            <h1 className="rankingPage__rankBody__chart__top3__nickName">
              SlidingFichazz
            </h1>
            <div className="rankingPage__rankBody__chart__top3__scores">
              <h1 className="rankingPage__rankBody__chart__top3__scores__victory">
                9
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top3__scores__defeats">
                5
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top3__scores__kills">
                14
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top3__scores__ratio">
                {Math.round((9 / 14) * 100) + "%"}
              </h1>
            </div>
          </div>

          <div className="rankingPage__rankBody__chart__top4" id="top4">
            <h1 className="rankingPage__rankBody__chart__top4__medalIcon">
              IV
            </h1>
            <h1 className="rankingPage__rankBody__chart__top4__nickName">
              Pitopitoresco
            </h1>
            <div className="rankingPage__rankBody__chart__top4__scores">
              <h1 className="rankingPage__rankBody__chart__top4__scores__victory">
                12
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top4__scores__defeats">
                9
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top4__scores__kills">
                23
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top4__scores__ratio">
                {Math.round((12 / 21) * 100) + "%"}
              </h1>
            </div>
          </div>

          <div className="rankingPage__rankBody__chart__top5" id="top5">
            <h1 className="rankingPage__rankBody__chart__top5__medalIcon">V</h1>
            <h1 className="rankingPage__rankBody__chart__top5__nickName">
              AbuZzid
            </h1>
            <div className="rankingPage__rankBody__chart__top5__scores">
              <h1 className="rankingPage__rankBody__chart__top5__scores__victory">
                8
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top5__scores__defeats">
                12
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top5__scores__kills">
                15
              </h1>
              <h1>/</h1>
              <h1 className="rankingPage__rankBody__chart__top5__scores__ratio">
                {Math.round((8 / 20) * 100) + "%"}
              </h1>
            </div>
          </div>
        </div>
        <div className="rankingPage__rankBody__helpSection">
          <h2 className="rankingPage__rankBody__helpSection__title">
            Lire le score:
          </h2>
          <li>
            <strong>Victoires remportées: </strong>score en vert.
          </li>
          <li>
            <strong>Défaites subies: </strong> score en rouge.
          </li>
          <li>
            <strong>Compteur de morts:</strong> nombre de fichas mangées sur
            l'ensemble des parties.
          </li>
          <li>
            <strong>Classement au ratio: </strong> pourcentage de victoires par
            rapport au nombre de parties jouées.
          </li>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
