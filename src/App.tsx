import { React, useState } from 'react'
import './App.css'
import useImg from "./assets/cover.png"


const cardImages = [
  { "src": "/assets/helmet-1.png" },
  { "src": "/assets/potion-1.png" },
  { "src": "/assets/ring-1.png" },
  { "src": "/assets/scroll-1.png" },
  { "src": "/assets/shield-1.png" },
  { "src": "/assets/sword-1.png" }
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  
  // Shuffle Card Function
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns);
  

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className='card' key={card.id}>
            <img src={card.src} className='front' alt="card front" />
            <img src={useImg} className='back' alt="card back" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
