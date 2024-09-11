// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BoardLayoutGrid.scss";

const cases = {
  1: "case1",
  2: "case2",
  3: "case3",
  4: "case4",
  5: "caseSecurity1",
  6: "case6",
  7: "case7",
  8: "case8",
  9: "case9",
  10: "case10",
  11: "case11",
  12: "caseSecurity2",
  13: "case13",
  14: "case14",
  15: "case15",
  16: "case16",
  17: "caseSecurity3",
  17.1: "yellowHouse1",
  17.2: "yellowHouse2",
  17.3: "yellowHouse3",
  17.4: "yellowHouse4",
  17.5: "yellowHouse5",
  17.6: "yellowHouse6",
  17.7: "yellowHouse7",
  18: "case18",
  19: "case19",
  20: "case20",
  21: "case21",
  22: "sortieMaisonJaune",
  23: "case23",
  24: "case24",
  25: "case25",
  26: "case26",
  27: "case27",
  28: "case28",
  29: "caseSecurity4",
  30: "case30",
  31: "case31",
  32: "case32",
  33: "case33",
  34: "caseSecurity5",
  34.1: "greenHouse1",
  34.2: "greenHouse2",
  34.3: "greenHouse3",
  34.4: "greenHouse4",
  34.5: "greenHouse5",
  34.6: "greenHouse6",
  34.7: "greenHouse7",
  35: "case35",
  36: "case36",
  37: "case37",
  38: "case38",
  39: "caseSecurity6",
  40: "case40",
  41: "case41",
  42: "case42",
  43: "case43",
  44: "case44",
  45: "case45",
  46: "caseSecurity7",
  47: "case47",
  48: "case48",
  49: "case49",
  50: "case50",
  51: "caseSecurity8",
  51.1: "redHouse1",
  51.2: "redHouse2",
  51.3: "redHouse3",
  51.4: "redHouse4",
  51.5: "redHouse5",
  51.6: "redHouse6",
  51.7: "redHouse7",
  52: "case52",
  53: "case53",
  54: "case54",
  55: "case55",
  56: "sortieMaisonRouge",
  57: "case57",
  58: "case58",
  59: "case59",
  60: "case60",
  61: "case61",
  62: "case62",
  63: "caseSecurity9",
  64: "case64",
  65: "case65",
  66: "case66",
  67: "case67",
  68: "caseSecurity10",
  68.1: "blueHouse1",
  68.2: "blueHouse2",
  68.3: "blueHouse3",
  68.4: "blueHouse4",
  68.5: "blueHouse5",
  68.6: "blueHouse6",
  68.7: "blueHouse7",
};

function Board() {
  // Function to render a section of the board with specific range of case numbers
  const renderSection = (start, end) => {
    return (
      <div className="gridSection">
        {Object.entries(cases)
          .filter(([key]) => key >= start && key <= end)
          .map(([key, value]) => (
            <div key={key} id={value} className={`gridCase ${value}`}>
              {value}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="Boardmap">
      <div className="Boardmap__gridBody">
        <div className="Boardmap__gridBody__topSection">
          <div className="Boardmap__gridBody__topSection__oneToEight">
            {renderSection(1, 8)} {/* Section 1 to 8 */}
          </div>
          <div className="Boardmap__gridBody__topSection__nineToSixteen">
            {renderSection(9, 16)} {/* Section 9 to 16 */}
          </div>
          <div className="Boardmap__gridBody__topSection__yellowHouse">
            {renderSection(17, 17.7)} {/* Section 17 */}
          </div>
          <div className="Boardmap__gridBody__topSection__18To25">
            {renderSection(18, 25)} {/* Section 18 to 25 */}
          </div>
          <div className="Boardmap__gridBody__topSection__26To33">
            {renderSection(26, 33)} {/* Section 26 to 33 */}
          </div>
        </div>
        <div className="Boardmap__gridBody__middleSection">
          <div className="Boardmap__gridBody__middleSection__greenHouse">
            {renderSection(34, 34.7)} {/* Section 34 */}
          </div>
          <div className="Boardmap__gridBody__middleSection__blueHouse">
            {renderSection(68, 68.7)} {/* Section 68 */}
          </div>
        </div>
        <div className="Boardmap__gridBody__bottomSection">
          <div className="Boardmap__gridBody__bottomSection__35To42">
            {renderSection(35, 42)} {/* Section 35 to 42 */}
          </div>
          <div className="Boardmap__gridBody__bottomSection__43To50">
            {renderSection(43, 50)} {/* Section 43 to 50 */}
          </div>
          <div className="Boardmap__gridBody__bottomSection__redHouse">
            {renderSection(51, 51.7)} {/* Section 51 */}
          </div>
          <div className="Boardmap__gridBody__bottomSection__52To59">
            {renderSection(52, 59)} {/* Section 52 to 59 */}
          </div>
          <div className="Boardmap__gridBody__bottomSection__60To67">
     
            {renderSection(60, 67)} {/* Section 60 to 67 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
