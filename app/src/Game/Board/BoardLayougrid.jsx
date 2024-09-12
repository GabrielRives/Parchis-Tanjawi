// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BoardLayoutGrid.scss";
import { MapInteractionCSS } from "react-map-interaction";
const cases = [
  { name: "1", backgroundColor: "beige" },
  { name: "2", backgroundColor: "beige" },
  { name: "3", backgroundColor: "beige" },
  { name: "4", backgroundColor: "beige" },
  { name: "Secu1", backgroundColor: "#1168d8" },
  { name: "6", backgroundColor: "beige" },
  { name: "7", backgroundColor: "beige" },
  { name: "8", backgroundColor: "beige", borderWidth: "0px 0px 1px 1px " },
  { name: "9", backgroundColor: "beige", borderWidth: "0px 0px 1px 1px " },
  { name: "10", backgroundColor: "beige" },
  { name: "11", backgroundColor: "beige" },
  { name: "Secu2", backgroundColor: "#1e1e24" },
  { name: "13", backgroundColor: "beige" },
  { name: "14", backgroundColor: "beige" },
  { name: "15", backgroundColor: "beige" },
  { name: "16", backgroundColor: "beige" },
  { name: "Secu3", backgroundColor: "#1e1e24" },
  { name: "yellowHouse1", backgroundColor: "#ffe600" },
  { name: "yellowHouse2", backgroundColor: "#ffe600" },
  { name: "yellowHouse3", backgroundColor: "#ffe600" },
  { name: "yellowHouse4", backgroundColor: "#ffe600" },
  { name: "yellowHouse5", backgroundColor: "#ffe600" },
  { name: "yellowHouse6", backgroundColor: "#ffe600" },
  { name: "yellowHouse7", backgroundColor: "#ffe600", borderWidth: "0px 0px 1px 1px " },
  { name: "18", backgroundColor: "beige" },
  { name: "19", backgroundColor: "beige" },
  { name: "20", backgroundColor: "beige" },
  { name: "21", backgroundColor: "beige" },
  { name: "ExitJaune", backgroundColor: "#ffe600" },
  { name: "23", backgroundColor: "beige" },
  { name: "24", backgroundColor: "beige" },
  { name: "25", backgroundColor: "beige", borderWidth: "0px 1px 1px 0px " },
  { name: "26", backgroundColor: "beige", borderWidth: "0px 1px 1px 0px " },
  { name: "27", backgroundColor: "beige" },
  { name: "28", backgroundColor: "beige" },
  { name: "Secu4", backgroundColor: "#1e1e24" },
  { name: "30", backgroundColor: "beige" },
  { name: "31", backgroundColor: "beige" },
  { name: "32", backgroundColor: "beige" },
  { name: "33", backgroundColor: "beige" },
  { name: "Secu5", backgroundColor: "#1e1e24" },
  { name: "greenHouse1", backgroundColor: "#088112" },
  { name: "greenHouse2", backgroundColor: "#088112" },
  { name: "greenHouse3", backgroundColor: "#088112" },
  { name: "greenHouse4", backgroundColor: "#088112" },
  { name: "greenHouse5", backgroundColor: "#088112" },
  { name: "greenHouse6", backgroundColor: "#088112" },
  { name: "greenHouse7", backgroundColor: "#088112" },
  { name: "35", backgroundColor: "beige" },
  { name: "36", backgroundColor: "beige" },
  { name: "37", backgroundColor: "beige" },
  { name: "38", backgroundColor: "beige" },
  { name: "Secu6", backgroundColor: "#088112" },
  { name: "40", backgroundColor: "beige" },
  { name: "41", backgroundColor: "beige" },
  { name: "42", backgroundColor: "beige", borderWidth: "1px 1px 0px 0px " },
  { name: "43", backgroundColor: "beige", borderWidth: "1px 1px 0px 0px " },
  { name: "44", backgroundColor: "beige" },
  { name: "45", backgroundColor: "beige" },
  { name: "Secu7", backgroundColor: "#1e1e24" },
  { name: "47", backgroundColor: "beige" },
  { name: "48", backgroundColor: "beige" },
  { name: "49", backgroundColor: "beige" },
  { name: "50", backgroundColor: "beige" },
  { name: "Secu8", backgroundColor: "#1e1e24" },
  { name: "redHouse1", backgroundColor: "#ce1e1e", borderWidth: "0px 0px 1px 1px " },
  { name: "redHouse2", backgroundColor: "#ce1e1e" },
  { name: "redHouse3", backgroundColor: "#ce1e1e" },
  { name: "redHouse4", backgroundColor: "#ce1e1e" },
  { name: "redHouse5", backgroundColor: "#ce1e1e" },
  { name: "redHouse6", backgroundColor: "#ce1e1e" },
  { name: "redHouse7", backgroundColor: "#ce1e1e" },
  { name: "52", backgroundColor: "beige" },
  { name: "53", backgroundColor: "beige" },
  { name: "54", backgroundColor: "beige" },
  { name: "55", backgroundColor: "beige" },
  { name: "ExitRouge", backgroundColor: "#ce1e1e" },
  { name: "57", backgroundColor: "beige" },
  { name: "58", backgroundColor: "beige" },
  { name: "59", backgroundColor: "beige", borderWidth: "1px 0px 0px 1px " },
  { name: "60", backgroundColor: "beige", borderWidth: "1px 0px 0px 1px " },
  { name: "61", backgroundColor: "beige" },
  { name: "62", backgroundColor: "beige" },
  { name: "Secu9", backgroundColor: "#1e1e24" },
  { name: "64", backgroundColor: "beige" },
  { name: "65", backgroundColor: "beige" },
  { name: "66", backgroundColor: "beige" },
  { name: "67", backgroundColor: "beige" },
  { name: "Secu10", backgroundColor: "#1e1e24" },
  { name: "blueHouse1", backgroundColor: "#1168d8" },
  { name: "blueHouse2", backgroundColor: "#1168d8" },
  { name: "blueHouse3", backgroundColor: "#1168d8" },
  { name: "blueHouse4", backgroundColor: "#1168d8" },
  { name: "blueHouse5", backgroundColor: "#1168d8" },
  { name: "blueHouse6", backgroundColor: "#1168d8" },
  { name: "blueHouse7", backgroundColor: "#1168d8" },
  { name: "pito1", borderWidth: "0px 0px 0px 0px " },
  { name: "pito2", borderWidth: "0px 0px 0px 0px " },
];

function Board() {
  // Function to render a section of the board with specific range of case numbers and orientation

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
    <MapInteractionCSS>
      <div className="Boardmap">
        <div className="mainRedHouse">
          <div className="mainRedHouse__centerSquare">
            <div className="mainRedHouse__centerSquare__innerColorSquare">
            </div>
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
                  {renderSection(97,98, "horizontal")}
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
    </MapInteractionCSS>
  );
}

export default Board;
