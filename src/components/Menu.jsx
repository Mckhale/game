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
    <div className="glass-card rounded-3xl p-8 text-center max-w-md mx-auto animate-fade-in card-hover">
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => window.close()}
          className="text-gray-400 hover:text-gray-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-100/50 backdrop-blur-sm"
          aria-label="Exit game"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 shimmer-effect">
          Java Quiz Game
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed subtle-bounce">
          Test your Java programming skills with 10 code-completion questions!
        </p>
      </div>
      
      {/* Instructions Button */}
      <button
        onClick={() => setShowInstructions(true)}
        className="mb-8 px-6 py-3 btn-gradient-blue rounded-xl font-medium btn-modern"
      >
        📖 How to Play & Difficulty Guide
      </button>
      
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose Difficulty:</h2>
        
        <div className="space-y-4">
          <button
            onClick={() => setSelectedDifficulty('easy')}
            className={`w-full py-4 px-6 rounded-xl font-medium btn-modern ${
              selectedDifficulty === 'easy'
                ? 'btn-gradient-green shadow-2xl shadow-green-500/50'
                : 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 hover:from-green-100 hover:to-green-200'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🟢</span>
              <span className="text-lg">Easy</span>
            </div>
          </button>
          
          <button
            onClick={() => setSelectedDifficulty('normal')}
            className={`w-full py-4 px-6 rounded-xl font-medium btn-modern ${
              selectedDifficulty === 'normal'
                ? 'btn-gradient-orange shadow-2xl shadow-orange-500/50'
                : 'bg-gradient-to-r from-yellow-50 to-orange-100 text-yellow-700 hover:from-yellow-100 hover:to-orange-200'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🟡</span>
              <span className="text-lg">Normal</span>
            </div>
          </button>
          
          <button
            onClick={() => setSelectedDifficulty('hard')}
            className={`w-full py-4 px-6 rounded-xl font-medium btn-modern ${
              selectedDifficulty === 'hard'
                ? 'btn-gradient-purple shadow-2xl shadow-purple-500/50'
                : 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 hover:from-red-100 hover:to-red-200'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🔴</span>
              <span className="text-lg">Hard</span>
            </div>
          </button>
        </div>
      </div>

      <button
        onClick={handleStart}
        disabled={!selectedDifficulty}
        className={`w-full py-5 px-8 rounded-xl font-bold text-xl btn-modern ${
          selectedDifficulty
            ? 'btn-gradient-cyan shadow-2xl shadow-cyan-500/50 animate-pulse-glow'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <div className="flex items-center justify-center space-x-2">
          <span>🚀</span>
          <span>Start Game</span>
        </div>
      </button>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="glass-card rounded-3xl p-8 max-w-2xl max-h-96 overflow-y-auto card-hover">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How to Play & Difficulty Guide
              </h2>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-gray-400 hover:text-gray-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-100/50 backdrop-blur-sm"
                aria-label="Close instructions"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-8 text-left">
              {/* General Instructions */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">🎮</span>
                  How to Play
                </h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Choose your difficulty level (Easy, Normal, or Hard)</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Answer 10 Java programming questions</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Get immediate feedback after each answer</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Score is only revealed at the end</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Questions automatically advance</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Try to get the highest score!</span></li>
                </ul>
              </div>

              {/* Difficulty Levels */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Easy Difficulty */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
                    <span className="mr-2">🟢</span>
                    Easy Level
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Perfect for beginners learning Java basics!</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Basic Java concepts and syntax</li>
                    <li>• Variable declarations, data types, loops</li>
                    <li>• Method calls and basic arrays</li>
                    <li>• Simple code completion exercises</li>
                  </ul>
                </div>

                {/* Normal Difficulty */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3 flex items-center">
                    <span className="mr-2">🟡</span>
                    Normal Level
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">For intermediate programmers ready for a challenge!</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Collections (ArrayList, HashMap)</li>
                    <li>• Exception handling and switch statements</li>
                    <li>• Enhanced for loops and String methods</li>
                    <li>• Object-oriented concepts</li>
                  </ul>
                </div>

                {/* Hard Difficulty */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
                    <span className="mr-2">🔴</span>
                    Hard Level
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">For experienced Java developers!</p>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Advanced Java features and generics</li>
                    <li>• Lambda expressions and streams</li>
                    <li>• Thread safety and synchronization</li>
                    <li>• Reflection and annotations</li>
                  </ul>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-4 flex items-center">
                  <span className="mr-2">💡</span>
                  Pro Tips
                </h3>
                <ul className="text-purple-600 space-y-2 text-sm">
                  <li className="flex items-start"><span className="mr-2">•</span><span>Read each question carefully before typing</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Don't worry about exact spacing or semicolons</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>High scores are saved for each difficulty level</span></li>
                  <li className="flex items-start"><span className="mr-2">•</span><span>Practice makes perfect - try all difficulty levels!</span></li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="mt-8 w-full py-4 px-6 btn-gradient-blue rounded-xl font-medium btn-modern"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Got it! Let's play!</span>
                <span>🚀</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu