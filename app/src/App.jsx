import { useState } from 'react'
import { MapInteractionCSS } from "react-map-interaction";
import './App.scss'
import Dice from "./Dice/Dice"
import Board from "./Board/Board"
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="parchis">
      
      
      <Board/>
        <Dice />
      </div>
    
  );
};


export default App
