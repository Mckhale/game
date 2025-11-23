import { useState } from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu') // 'menu', 'quiz', 'results'
  const [difficulty, setDifficulty] = useState('')
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    setGameState('quiz')
    setScore(0)
    setTotalQuestions(0)
  }

  const endGame = (finalScore, total) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setGameState('results')
  }

  const backToMenu = () => {
    setGameState('menu')
    setDifficulty('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="floating-dots">
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
      </div>
      
      <div className="w-full max-w-2xl z-10">
        {gameState === 'menu' && <Menu onStartGame={startGame} />}
        {gameState === 'quiz' && (
          <Quiz 
            difficulty={difficulty} 
            onEndGame={endGame}
            onBackToMenu={backToMenu}
          />
        )}
        {gameState === 'results' && (
          <Results 
            score={score} 
            totalQuestions={totalQuestions}
            difficulty={difficulty}
            onPlayAgain={() => startGame(difficulty)}
            onBackToMenu={backToMenu}
          />
        )}
      </div>
    </div>
  )
}

export default App