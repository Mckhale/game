import { useState } from 'react'

function Menu({ onStartGame }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [showInstructions, setShowInstructions] = useState(false)

  const handleStart = () => {
    if (selectedDifficulty) {
      onStartGame(selectedDifficulty)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto">
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => window.close()}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
          aria-label="Exit game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Java Quiz Game</h1>
      <p className="text-gray-600 mb-6">Test your Java programming skills with 10 code-completion questions!</p>
      
      {/* Instructions Button */}
      <button
        onClick={() => setShowInstructions(true)}
        className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
      >
        📖 How to Play & Difficulty Guide
      </button>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold text-gray-700">Choose Difficulty:</h2>
        
        <div className="space-y-3">
          <button
            onClick={() => setSelectedDifficulty('easy')}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 ${
              selectedDifficulty === 'easy'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Easy
          </button>
          
          <button
            onClick={() => setSelectedDifficulty('normal')}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 ${
              selectedDifficulty === 'normal'
                ? 'bg-yellow-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Normal
          </button>
          
          <button
            onClick={() => setSelectedDifficulty('hard')}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-105 ${
              selectedDifficulty === 'hard'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Hard
          </button>
        </div>
      </div>

      <button
        onClick={handleStart}
        disabled={!selectedDifficulty}
        className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all transform ${
          selectedDifficulty
            ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Start Game
      </button>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">How to Play & Difficulty Guide</h2>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
                aria-label="Close instructions"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-left">
              {/* General Instructions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🎮 How to Play</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Choose your difficulty level (Easy, Normal, or Hard)</li>
                  <li>• Answer 10 Java programming questions</li>
                  <li>• Get immediate feedback after each answer</li>
                  <li>• Score is only revealed at the end</li>
                  <li>• Questions automatically advance</li>
                  <li>• Try to get the highest score!</li>
                </ul>
              </div>

              {/* Easy Difficulty */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-600 mb-2">🟢 Easy Level</h3>
                <p className="text-gray-600 text-sm mb-2">Perfect for beginners learning Java basics!</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Multiple choice questions only</li>
                  <li>• Basic Java concepts and syntax</li>
                  <li>• Variable declarations, data types, loops</li>
                  <li>• Method calls and basic arrays</li>
                  <li>• No typing required - just click your answer!</li>
                </ul>
              </div>

              {/* Normal Difficulty */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-600 mb-2">🟡 Normal Level</h3>
                <p className="text-gray-600 text-sm mb-2">For intermediate programmers ready for a challenge!</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Mix of multiple choice and typing questions</li>
                  <li>• Collections (ArrayList, HashMap)</li>
                  <li>• Exception handling and switch statements</li>
                  <li>• Enhanced for loops and String methods</li>
                  <li>• Object-oriented concepts</li>
                </ul>
              </div>

              {/* Hard Difficulty */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-red-600 mb-2">🔴 Hard Level</h3>
                <p className="text-gray-600 text-sm mb-2">For experienced Java developers!</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• All typing questions - no multiple choice</li>
                  <li>• Advanced Java features and generics</li>
                  <li>• Lambda expressions and streams</li>
                  <li>• Thread safety and synchronization</li>
                  <li>• Reflection and annotations</li>
                  <li>• Functional interfaces and CompletableFuture</li>
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">💡 Pro Tips</h3>
                <ul className="text-blue-600 space-y-1 text-sm">
                  <li>• Read each question carefully before answering</li>
                  <li>• For typing questions, don't worry about exact spacing</li>
                  <li>• High scores are saved for each difficulty level</li>
                  <li>• Practice makes perfect - try all difficulty levels!</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="mt-6 w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Got it! Let's play! 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu