import { React, useState } from 'react'
import './App.css'


const cardImages = [
  { "src": "/assets/helmet-1.png" },
  { "src": "/assets/potion-1.png" },
  { "src": "/assets/ring-1.png" },
  { "src": "/assets/scroll-1.png" },
  { "src": "/assets/shield-1.png" },
  { "src": "/assets/sword-1.png" }
]

function App() {
  
  // Shuffle Card Function
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  )
}

export default App
