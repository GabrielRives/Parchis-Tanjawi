//import { useState } from 'react'
import './App.scss'
//import Dice from "./Game/Dice/Dice"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Gradient from "../src/Components/AnimatedBackground/Gradient"
import BoardLayout from "./Game/Board/BoardLayougrid"
import Home from './Home/Home'
import Rules from "./Components/RulesPage/RulesPage";
import Ranking from './Components/RankingPage/RankingPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Dice from "./Game/Dice/Dice";
import BoardTest from "./Game/Board/Board";
import TesGamePlay from "./Game/TestGameplay";



function App() {
  
   const AnimatedRoutes = () => {
    const location = useLocation();

    return (
      <div>
        <Routes location={location}>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/boardLayout" element={<BoardLayout />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/test" element={<BoardTest />} />
        </Routes>
      </div>
    );
    }
return (
  <BrowserRouter>
    <Gradient />
    <div className="gameBoard">
      <AnimatedRoutes />
      <TesGamePlay/>
    </div>
  </BrowserRouter>
);

}




export default App
