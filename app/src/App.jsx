import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Dice from "./Dice/Dice"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Dice/>

    </>
  )
}

export default App
