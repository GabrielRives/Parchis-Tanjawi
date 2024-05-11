import './Introduction.scss';
import React from "react";
import Popup from "reactjs-popup";

function Introduction() {
    return (
      <Popup
        trigger={<button className="introPopup">Introduction au jeu</button>}
        position="bottom left"
      >
        <div className="introductionField">
          <div className="introductionField__leftColumn">colonne 1</div>
          <div className="introductionField__rightColumn">colonne 2</div>
        </div>
      </Popup>
    );
    
}

export default Introduction;