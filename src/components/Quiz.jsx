import { useState, useEffect } from 'react'
import { getRandomQuestions } from '../data/questions.js'

function Quiz({ difficulty, onEndGame, onBackToMenu }) {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [selectedChoice, setSelectedChoice] = useState('')
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

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
    let userResponse = ''
    
    if (currentQuestion.type === 'multiple_choice') {
      if (!selectedChoice) return
      userResponse = selectedChoice
    } else {
      if (!userAnswer.trim()) return
      userResponse = userAnswer
    }

    let correct = false
    if (currentQuestion.type === 'multiple_choice') {
      correct = userResponse === currentQuestion.answer
    } else {
      const normalizedUser = normalizeAnswer(userResponse)
      const normalizedCorrect = normalizeAnswer(currentQuestion.answer)
      correct = normalizedUser === normalizedCorrect
    }
    
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setScore(score + 1)
      setFeedback('Correct!')
    } else {
      setFeedback('Incorrect!')
    }

    // Always advance to next question after a short delay
    setTimeout(() => {
      nextQuestion()
    }, 1200)
  }

  const nextQuestion = () => {
    setShowFeedback(false)
    setUserAnswer('')
    setSelectedChoice('')
    setFeedback('')
    setIsCorrect(null)
    
    if (currentQuestionIndex + 1 >= questions.length) {
      onEndGame(score + (isCorrect ? 1 : 0), questions.length)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && currentQuestion.type === 'typing') {
      e.preventDefault()
      checkAnswer()
    }
  }

  if (questions.length === 0) {
    return <div className="text-center text-gray-600">Loading questions...</div>
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBackToMenu}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Exit game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-right">
          <div className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Complete the Java code:</h2>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border">
          <pre className="whitespace-pre-wrap">{currentQuestion.prompt}</pre>
        </div>
      </div>

      {/* Answer Input */}
      <div className="mb-6">
        {currentQuestion.type === 'multiple_choice' ? (
          <div className="space-y-3">
            {currentQuestion.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => setSelectedChoice(choice)}
                disabled={showFeedback}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-300
                  ${selectedChoice === choice 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-blue-300'
                  }
                  ${showFeedback && choice === currentQuestion.answer
                    ? 'border-green-500 bg-green-50'
                    : ''
                  }
                  ${showFeedback && choice === selectedChoice && choice !== currentQuestion.answer
                    ? 'border-orange-500 bg-orange-50'
                    : ''
                  }
                  ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {choice}
              </button>
            ))}
          </div>
        ) : (
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here..."
            className={`w-full p-4 border-2 rounded-lg font-mono text-sm transition-all duration-300 resize-none
              ${showFeedback && isCorrect ? 'border-green-500 bg-green-50' : ''}
              ${showFeedback && !isCorrect ? 'border-orange-500 bg-orange-50 animate-shake' : ''}
              ${!showFeedback ? 'border-gray-300 focus:border-blue-500 focus:outline-none' : ''}
            `}
            rows={3}
            disabled={showFeedback}
          />
        )}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`text-center mb-4 font-medium ${
          isCorrect ? 'text-green-600' : 'text-orange-600'
        }`}>
          {feedback}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={checkAnswer}
          disabled={
            (currentQuestion.type === 'multiple_choice' ? !selectedChoice : !userAnswer.trim()) || 
            showFeedback
          }
          className={`px-8 py-3 rounded-lg font-bold text-lg transition-all transform
            ${showFeedback && isCorrect 
              ? 'bg-green-500 text-white' 
              : showFeedback && !isCorrect 
              ? 'bg-orange-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
            }
            ${
              (currentQuestion.type === 'multiple_choice' ? !selectedChoice : !userAnswer.trim()) || 
              showFeedback ? 'opacity-50 cursor-not-allowed' : ''
            }
          `}
        >
          {showFeedback ? (isCorrect ? 'Correct!' : 'Moving on...') : 'Enter'}
        </button>
      </div>
    </div>
  )
}

export default Quiz