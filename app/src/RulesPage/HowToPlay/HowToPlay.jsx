import './HowToPlay.scss';
import React from "react";
import Popup from "reactjs-popup";

function Introduction() {
    return (<Popup trigger={<button className='howToPlayPopup'>
       Déroulement
    </button>} position="bottom center">
        <div className='howToPlayField'>Popup content here !!</div>
    </Popup>)
    
}

export default Introduction;