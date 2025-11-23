# Java Code Completion Quiz Game

A modern, interactive single-page React application for testing Java programming skills through code completion questions.

## Features

- **Three Difficulty Levels**: Easy, Normal, and Hard questions
- **10 Questions per Game**: Randomly selected from a pool of questions
- **Modern UI**: Clean, responsive design with smooth animations
- **Real-time Feedback**: Visual feedback with color changes and animations
- **Answer Normalization**: Forgiving answer checking that handles whitespace and semicolons
- **High Score Tracking**: Local storage for tracking best scores per difficulty
- **Accessibility**: Keyboard navigation and ARIA labels
- **Animations**: Shake effect for wrong answers, glow effect for correct answers
- **Confetti Animation**: Celebration effect for perfect scores

## Screens

1. **Landing/Menu Screen**
   - Game title and instructions
   - Difficulty selection (Easy/Normal/Hard)
   - Start button
   - Exit control

2. **Quiz Screen**
   - Progress bar and question counter
   - Java code completion questions
   - Code input area with syntax highlighting
   - Real-time feedback and hints
   - Exit button

3. **Results Screen**
   - Final score and accuracy percentage
   - Performance message
   - High score tracking
   - Play again and back to menu options

## Technical Details

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **Animations**: CSS keyframes and transitions
- **Local Storage**: For high score persistence

## Question Categories

### Easy (10 questions)
- Basic syntax and variable declaration
- Control structures (if, for, while)
- Method calls and return statements
- Array creation and basic operations

### Normal (10 questions)
- Switch statements
- ArrayList and collections
- Enhanced for loops
- Exception handling
- HashMap operations
- String manipulation
- Constructor creation

### Hard (10 questions)
- Generics and type parameters
- Lambda expressions
- Optional class usage
- Stream operations
- Synchronized methods
- Functional interfaces
- CompletableFuture
- Method references
- Reflection
- Custom annotations

## Installation and Setup

1. **Prerequisites**
   ```bash
   Node.js (v14 or higher)
   npm or yarn
   ```

2. **Clone and Install**
   ```bash
   # Navigate to project directory
   cd java-quiz-game
   
   # Install dependencies
   npm install
   ```

3. **Development**
   ```bash
   # Start development server
   npm run dev
   
   # Open browser to http://localhost:5173
   ```

4. **Production Build**
   ```bash
   # Build for production
   npm run build
   
   # Preview production build
   npm run preview
   ```

## Game Mechanics

1. **Answer Checking**: 
   - Trims whitespace and normalizes spacing
   - Removes trailing semicolons for flexibility
   - Case-sensitive for variable names where appropriate

2. **Feedback System**:
   - Correct answers: Green highlight, automatic advance after 700ms
   - Wrong answers: Red highlight with shake animation, can retry
   - Hints provided after incorrect attempts

3. **Progression**:
   - 10 questions per game
   - Questions randomly selected from difficulty pool
   - Score tracking throughout the game
   - Final results with accuracy percentage

## Accessibility Features

- Keyboard navigation support
- ARIA labels for screen readers
- High contrast color scheme
- Responsive design for mobile devices
- Clear visual feedback for all interactions

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Project Structure

```
src/
├── components/
│   ├── Menu.jsx          # Landing screen component
│   ├── Quiz.jsx          # Quiz game component
│   └── Results.jsx       # Results screen component
├── data/
│   └── questions.js      # Question pools by difficulty
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
├── App.css               # Custom animations and styles
└── index.css             # Global styles and Tailwind imports
```

## Customization

- Add more questions by editing `src/data/questions.js`
- Modify animations in `src/App.css`
- Adjust difficulty levels and scoring in components
- Customize colors and styling with Tailwind CSS

## License

This project is open source and available under the MIT License.