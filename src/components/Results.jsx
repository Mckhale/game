import { useEffect, useState } from 'react'

function Results({ score, totalQuestions, difficulty, onPlayAgain, onBackToMenu }) {
  const [highScore, setHighScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
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

    // Show confetti for perfect score
    if (accuracy === 100) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
    }
  }, [score, difficulty, accuracy])

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
    <div className="glass-card rounded-3xl p-8 text-center max-w-md mx-auto relative animate-fade-in card-hover">
      {/* Enhanced Confetti Animation for Perfect Score */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
      )}

      <div className="relative z-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Game Over!
        </h1>
        
        {/* Enhanced Score Display */}
        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl">
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {score}/{totalQuestions}
          </div>
          <div className="text-3xl font-bold text-gray-700 mb-3">
            {accuracy}% Accuracy
          </div>
          <div className={`text-xl font-semibold ${getDifficultyColor()}`}>
            {getDifficultyLabel()} Difficulty
          </div>
          
          {/* Performance Badge */}
          {isPerfectScore && (
            <div className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🏆 PERFECT SCORE!
            </div>
          )}
          {accuracy >= 80 && accuracy < 100 && (
            <div className="mt-4 bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🌟 EXCELLENT!
            </div>
          )}
        </div>

        {/* Enhanced Performance Message */}
        <div className="mb-8">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {getPerformanceMessage()}
          </p>
          
          {/* Enhanced High Score Display */}
          {score >= highScore && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 rounded-2xl p-6 mb-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">🎯</span>
                <span className="text-yellow-800 font-bold text-lg">
                  New High Score for {getDifficultyLabel()}!
                </span>
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          )}
          
          {score < highScore && (
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-4 mb-6">
              <div className="text-gray-600 text-lg">
                High Score: <span className="font-bold">{highScore}/{totalQuestions}</span>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={onPlayAgain}
            className="w-full py-5 px-6 btn-gradient-blue rounded-2xl font-bold text-xl btn-modern"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🔄</span>
              <span>Play Again</span>
            </div>
          </button>
          
          <button
            onClick={onBackToMenu}
            className="w-full py-5 px-6 btn-gradient-purple rounded-2xl font-bold text-xl btn-modern"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🏠</span>
              <span>Back to Menu</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results