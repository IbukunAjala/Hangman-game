import React from "react";

function HangmanDrawing({ wrongGuesses }) {
  return (
    <svg height="250" width="200" className="hangman-drawing" style={{ margin: "20px auto", display: "block" }}>
      {/* Gallows */}
      <line x1="10" y1="230" x2="150" y2="230" stroke="purple" strokeWidth="4" />
      <line x1="50" y1="230" x2="50" y2="20" stroke="purple" strokeWidth="4" />
      <line x1="50" y1="20" x2="120" y2="20" stroke="purple" strokeWidth="4" />
      <line x1="120" y1="20" x2="120" y2="40" stroke="purple" strokeWidth="4" />

      {/* Head */}
      {wrongGuesses > 0 && <circle cx="120" cy="60" r="20" stroke="purple" strokeWidth="4" fill="none" />}

      {/* Body */}
      {wrongGuesses > 1 && <line x1="120" y1="80" x2="120" y2="140" stroke="purple" strokeWidth="4" />}

      {/* Left Arm */}
      {wrongGuesses > 2 && <line x1="120" y1="90" x2="90" y2="120" stroke="purple" strokeWidth="4" />}

      {/* Right Arm */}
      {wrongGuesses > 3 && <line x1="120" y1="90" x2="150" y2="120" stroke="purple" strokeWidth="4" />}

      {/* Left Leg */}
      {wrongGuesses > 4 && <line x1="120" y1="140" x2="90" y2="180" stroke="purple" strokeWidth="4" />}

      {/* Right Leg */}
      {wrongGuesses > 5 && <line x1="120" y1="140" x2="150" y2="180" stroke="purple" strokeWidth="4" />}
    </svg>
  );
}

export default HangmanDrawing;
