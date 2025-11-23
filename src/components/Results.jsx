import { useEffect, useState } from 'react'

function Results({ score, totalQuestions, difficulty, onPlayAgain, onBackToMenu }) {
  const [highScore, setHighScore] = useState(0)
  const accuracy = Math.round((score / totalQuestions) * 100)

  useEffect(() => {
    // Load high score from localStorage
    const savedHighScore = localStorage.getItem(`javaQuizHighScore_${difficulty}`)
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore))
    }

    // Save new high score if current score is higher
    if (score > (savedHighScore || 0)) {
      localStorage.setItem(`javaQuizHighScore_${difficulty}`, score.toString())
      setHighScore(score)
    }
  }, [score, difficulty])

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'easy': return 'text-green-600'
      case 'normal': return 'text-yellow-600'
      case 'hard': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getDifficultyLabel = () => {
    switch (difficulty) {
      case 'easy': return 'Easy'
      case 'normal': return 'Normal'
      case 'hard': return 'Hard'
      default: return 'Unknown'
    }
  }

  const getPerformanceMessage = () => {
    if (accuracy === 100) return "Perfect! You're a Java master! 🏆"
    if (accuracy >= 80) return "Excellent work! 🎉"
    if (accuracy >= 60) return "Good job! Keep practicing! 👍"
    if (accuracy >= 40) return "Not bad! There's room for improvement! 📚"
    return "Keep studying Java! You'll get better! 💪"
  }

  const isPerfectScore = accuracy === 100

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto relative">
      {/* Confetti Animation for Perfect Score */}
      {isPerfectScore && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-800 mb-6">Game Over!</h1>
      
      {/* Score Display */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
        <div className="text-6xl font-bold text-blue-600 mb-2">
          {score}/{totalQuestions}
        </div>
        <div className="text-2xl font-semibold text-gray-700 mb-2">
          {accuracy}% Accuracy
        </div>
        <div className={`text-lg font-medium ${getDifficultyColor()}`}>
          {getDifficultyLabel()} Difficulty
        </div>
      </div>

      {/* Performance Message */}
      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-4">
          {getPerformanceMessage()}
        </p>
        
        {/* High Score */}
        {score >= highScore && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <div className="text-yellow-800 font-medium">
              🎯 New High Score for {getDifficultyLabel()}!
            </div>
          </div>
        )}
        
        {score < highScore && (
          <div className="text-gray-600 text-sm mb-4">
            High Score: {highScore}/{totalQuestions}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={onPlayAgain}
          className="w-full py-4 px-6 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Play Again
        </button>
        
        <button
          onClick={onBackToMenu}
          className="w-full py-4 px-6 bg-gray-500 text-white rounded-lg font-bold text-lg hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Back to Menu
        </button>
      </div>
    </div>
  )
}

export default Results