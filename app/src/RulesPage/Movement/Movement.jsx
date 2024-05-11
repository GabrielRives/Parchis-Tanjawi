import './Movement.scss';
import React from "react";
import Popup from "reactjs-popup";

function Movement() {
    return (<Popup trigger={<button className='movementPopup'>
        Déplacements
    </button>} position="bottom center">
        <div className='field'>Popup content here !!</div>
    </Popup>)
    
}

export default Movement;