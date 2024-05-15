import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss'
import Dice from "./Game/Dice/Dice"
import Board from "./Game/Board/Board"
import Home from './Home/Home'
import Rules from "./Components/RulesPage/RulesPage";
import Ranking from './Components/RankingPage/RankingPage';


function App() {
  const [count, setCount] = useState(0)

    const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/board", element: <Board /> },
      { path: "/rules", element: <Rules /> },
      { path: "/ranking", element: <Ranking /> },
    ]);
    return <RouterProvider router={router} />;

  



}




export default App
