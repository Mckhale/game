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
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced animated background dots */}
      <div className="floating-dots">
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
      </div>
      
      <div className="w-full max-w-2xl z-10">
        {gameState === 'menu' && (
          <div className="animate-fade-in">
            <Menu onStartGame={startGame} />
          </div>
        )}
        {gameState === 'quiz' && (
          <div className="animate-fade-in">
            <Quiz 
              difficulty={difficulty} 
              onEndGame={endGame}
              onBackToMenu={backToMenu}
            />
          </div>
        )}
        {gameState === 'results' && (
          <div className="animate-fade-in">
            <Results 
              score={score} 
              totalQuestions={totalQuestions}
              difficulty={difficulty}
              onPlayAgain={() => startGame(difficulty)}
              onBackToMenu={backToMenu}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App