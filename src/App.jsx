import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Scoreboard from './components/scoreboard'

function App() {
  

  return (
    <>
    <Scoreboard/>
    <div className='cardContainer'>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default App
