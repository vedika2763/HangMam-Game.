// components/GameStatus.js

import React from 'react';

const GameStatus = ({ remainingGuesses, resetGame }) => {
  return (
    <div className="game-status">
      <p>Remaining guesses: {remainingGuesses}</p>
      <button onClick={resetGame}>New Game</button>
    </div>
  );
};

export default GameStatus;


