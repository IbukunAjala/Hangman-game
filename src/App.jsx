//AJALA IBUKUNOLUWA REACT PROJECT.(EDS ASSESSMENT)
import React, { useState, useEffect } from 'react';
import './App.css';
import words from './words';
import HangmanDrawing from "./HangmanDrawing";

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
  }, []);

  useEffect(() => {
    const isWinner = word && word.split('').every(letter => guessedLetters.includes(letter));
    if (isWinner) {
      setGameStatus('won');
    } else if (wrongGuesses >= 6) {
      setGameStatus('lost');
    }
  }, [guessedLetters, wrongGuesses, word]);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus !== 'playing') return;

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setGuessedLetters([...guessedLetters, letter]);
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  return (
    <div className="app">
      <h1 className="title">HANGMAN GAME</h1>
     
        <HangmanDrawing wrongGuesses={wrongGuesses} />
    
      <div className="word-display">{renderWord()}</div>
      <div className="keyboard">
        {ALPHABET.map((letter) => (
          <button
            key={letter}
            className="key-button"
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
          >
            {letter}
          </button>
        ))}
      </div>
      <p className="instructions">Guess the hidden word by clicking the letters. You have 6 chances!</p>
      {gameStatus !== 'playing' && (
        <div className="popup">
          <div className="popup-content">
            <h2>{gameStatus === 'won' ? '🎉 You won!' : '😢 You lost!'}</h2>
            {gameStatus === 'lost' && <p>The word was: {word}</p>}
            <button className="restart-button" onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

