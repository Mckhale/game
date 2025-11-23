import { useState, useEffect } from 'react'
import { getRandomQuestions } from '../data/questions.js'

function Quiz({ difficulty, onEndGame, onBackToMenu }) {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const questionPool = getRandomQuestions(difficulty, 10)
    setQuestions(questionPool)
  }, [difficulty])

  const normalizeAnswer = (answer) => {
    return answer
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/;\s*$/, '')
  }

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex]
    
    if (!userAnswer.trim()) return
    
    const normalizedUser = normalizeAnswer(userAnswer)
    const normalizedCorrect = normalizeAnswer(currentQuestion.answer)
    const correct = normalizedUser === normalizedCorrect
    
    setIsCorrect(correct)
    setShowFeedback(true)
    setShowHint(false)

    if (correct) {
      setScore(score + 1)
      setFeedback('🎉 Correct!')
    } else {
      setFeedback('❌ Incorrect!')
    }

    // Always advance to next question after a short delay
    setTimeout(() => {
      nextQuestion()
    }, 1200)
  }

  const nextQuestion = () => {
    setShowFeedback(false)
    setShowHint(false)
    setUserAnswer('')
    setFeedback('')
    setIsCorrect(null)
    
    if (currentQuestionIndex + 1 >= questions.length) {
      onEndGame(score + (isCorrect ? 1 : 0), questions.length)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      checkAnswer()
    }
  }

  if (questions.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center animate-fade-in">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading questions...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBackToMenu}
          className="text-gray-400 hover:text-gray-600 transition-all duration-300 p-3 rounded-full hover:bg-gray-100/50 backdrop-blur-sm btn-modern"
          aria-label="Exit game"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-right">
          <div className="text-sm text-gray-500 font-medium">
            Question {currentQuestionIndex + 1} / {questions.length}
          </div>
          <div className="text-xs text-gray-400 capitalize">
            {difficulty} Level
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="w-full bg-gray-200/50 rounded-full h-3 mb-8 overflow-hidden">
        <div 
          className="progress-bar h-3 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
          Complete the Java code:
        </h2>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 font-mono text-sm border border-gray-200 shadow-inner">
          <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">{currentQuestion.prompt}</pre>
        </div>
      </div>

      {/* Enhanced Hint Button */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setShowHint(!showHint)}
          disabled={showFeedback}
          className={`px-6 py-3 rounded-xl font-medium btn-modern ${
            showHint 
              ? 'btn-gradient-orange shadow-lg' 
              : 'btn-gradient-blue shadow-lg'
          } ${showFeedback ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">💡</span>
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          </div>
        </button>
      </div>

      {/* Enhanced Hint Display */}
      {showHint && (
        <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 animate-fade-in">
          <div className="flex items-start space-x-3">
            <span className="text-yellow-600 text-xl">💡</span>
            <p className="text-yellow-800 text-sm font-medium leading-relaxed">{currentQuestion.hint}</p>
          </div>
        </div>
      )}

      {/* Enhanced Answer Input */}
      <div className="mb-8">
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your answer here..."
          className={`w-full p-6 border-3 rounded-2xl font-mono text-base transition-all duration-300 resize-none input-modern ${
            showFeedback && isCorrect 
              ? 'border-green-400 bg-gradient-to-br from-green-50 to-green-100 animate-glow-success' 
              : ''
          } ${
            showFeedback && !isCorrect 
              ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-orange-100 animate-shake' 
              : ''
          } ${
            !showFeedback 
              ? 'border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200' 
              : ''
          }`}
          rows={4}
          disabled={showFeedback}
        />
      </div>

      {/* Enhanced Feedback */}
      {showFeedback && (
        <div className={`text-center mb-8 font-bold text-lg animate-fade-in ${
          isCorrect ? 'text-green-600' : 'text-orange-600'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 inline-block">
            {feedback}
          </div>
        </div>
      )}

      {/* Enhanced Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={checkAnswer}
          disabled={!userAnswer.trim() || showFeedback}
          className={`px-10 py-4 rounded-2xl font-bold text-xl btn-modern ${
            showFeedback && isCorrect 
              ? 'btn-gradient-green shadow-2xl shadow-green-500/50' 
              : showFeedback && !isCorrect 
              ? 'btn-gradient-orange shadow-2xl shadow-orange-500/50'
              : 'btn-gradient-blue shadow-2xl shadow-blue-500/50'
          } ${
            !userAnswer.trim() || showFeedback 
              ? 'opacity-50 cursor-not-allowed' 
              : ''
          }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-2xl">
              {showFeedback 
                ? (isCorrect ? '🎉' : '🔄') 
                : '🚀'
              }
            </span>
            <span>
              {showFeedback 
                ? (isCorrect ? 'Correct!' : 'Moving on...') 
                : 'Enter Answer'
              }
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Quiz