// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BoardLayoutGrid.scss";
import { cases } from "../Data/dataCases";

function Board() {
  // Function to render a section of the board with specific range of case numbers and orientation
  console.log(cases);
  const renderSection = (start, end, orientation) => {
    return (
      <div className={`gridSectionA gridSectionB`}>
        {cases
          .slice(start - 1, end) // Obtenir les éléments entre start et end
          .map((value, index) => (
            <div
              key={index}
              id={value.name}
              className={`gridCase ${orientation === "vertical" ? "gridCaseVertical" : "gridCaseHorizontal"}`}
              style={{ backgroundColor: value.backgroundColor, borderWidth: value.borderWidth }} // Applique la couleur de fond ici
            >
              {value.name} {/* Affiche le nom de la case */}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="Boardmap">
      <div className="mainRedHouse">
        <div className="mainRedHouse__centerSquare">
          <div className="mainRedHouse__centerSquare__innerColorSquare"></div>
        </div>
      </div>
      <div className="mainBlueHouse">
        <div className="mainBlueHouse__centerSquare"></div>
      </div>
      <div className="mainGreenHouse">
        <div className="mainGreenHouse__centerSquare"></div>
      </div>
      <div className="mainYellowHouse">
        <div className="mainYellowHouse__centerSquare"></div>
      </div>
      <div className="gridBody">
        <div className="topSection">
          <div className="nineToSixteen">
            {renderSection(9, 16, "horizontal")} {/* Plus large que haute */}
          </div>
          <div className="yellowHouse">
            {renderSection(17, 24, "horizontal")} {/* Plus large que haute */}
          </div>
          <div className="eighteenTo25">
            {renderSection(25, 32, "horizontal")} {/* Plus large que haute */}
          </div>
        </div>

        <div className="middleSection">
          <div className="middleLeft">
            <div className="twentySixTo33">
              {renderSection(33, 40, "vertical")} {/* Plus haute que large */}
            </div>
            <div className="greenHouse">
              {renderSection(41, 48, "vertical")} {/* Plus haute que large */}
              <div className="thirtyFiveTo42">
                {renderSection(49, 56, "vertical")} {/* Plus haute que large */}
              </div>
            </div>
          </div>
          <div className="middleSquare">
            <div id="ConnectLineA"></div>
            <div id="ConnectLineB"></div>
            <div className="middleSquare__InnerSquare">
              <div id="ConnectLineC"></div>
              <div id="ConnectLineD"></div>
              {renderSection(97, 98, "horizontal")}
            </div>
          </div>
          <div className="middleRight">
            <div className="oneToEight">
              {renderSection(1, 8, "vertical")} {/* Plus haute que large */}
            </div>
            <div className="blueHouse">
              {renderSection(89, 96, "vertical")} {/* Plus haute que large */}
            </div>
            <div className="sixtyTo67">
              {renderSection(81, 88, "vertical")} {/* Plus haute que large */}
            </div>
          </div>
        </div>

        <div className="bottomSection">
          <div className="fourtyThreeTo50">
            {renderSection(57, 64, "horizontal")} {/* Plus large que haute */}
          </div>
          <div className="redHouse">
            {renderSection(65, 72, "horizontal")} {/* Plus large que haute */}
          </div>
          <div className="fiftyTwoTo59">
            {renderSection(73, 80, "horizontal")} {/* Plus large que haute */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
