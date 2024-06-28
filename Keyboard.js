// components/Keyboard.js

import React from 'react';

const Keyboard = ({ onClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="keyboard">
      {alphabet.map((letter, index) => (
        <button key={index} onClick={() => onClick(letter)} disabled={false}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
