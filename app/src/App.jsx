//import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss'
//import Dice from "./Game/Dice/Dice"
import Board from "./Game/Board/Board"
import BoardGrid from "./Game/Board/BoardLayougrid"
import Home from './Home/Home'
import Rules from "./Components/RulesPage/RulesPage";
import Ranking from './Components/RankingPage/RankingPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Dice from "./Game/Dice/Dice"



function App() {
  //const [count, setCount] = useState(0)

    const router = createBrowserRouter([
      { path: "*", element: <PageNotFound /> },
      { path: "/", element: <Home /> },
      { path: "/board", element: <Board /> },
      { path: "/rules", element: <Rules /> },
      { path: "/ranking", element: <Ranking /> },
      {path:"/gridDev", element:<BoardGrid/>},
      {path:"/dice", element:<Dice/>}
    ]);
    return (
      <>
       
        <RouterProvider router={router} />
      </>
    );

  



}




export default App
