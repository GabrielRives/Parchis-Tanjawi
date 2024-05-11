import './Doors.scss';
import React from "react";
import Popup from "reactjs-popup";

function Doors() {
    return (<Popup trigger={<button className='doorsPopup'>
       Les Portes
    </button>} position="bottom right">
        <div className='doorsField'>Popup content here !!</div>
    </Popup>)
    
}

export default Doors;