import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [playerNames, setPlayerNames] = useState({ X: '', O: '' });

  return (
    <GameContext.Provider value={{ score, setScore, playerNames, setPlayerNames }}>
      {children}
    </GameContext.Provider>
  );
};
