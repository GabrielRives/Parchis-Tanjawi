import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss'
import Dice from "./Game/Dice/Dice"
import Board from "./Game/Board/Board"
import Home from './Home/Home'
import Rules from './RulesPage/RulesPage';


function App() {
  const [count, setCount] = useState(0)

    const router = createBrowserRouter([
      { path: "/", element: <Home /> },
      { path: "/board", element: <Board /> },
      { path: "/rules", element: <Rules /> },
    ]);
    return <RouterProvider router={router} />;

  



};




export default App
