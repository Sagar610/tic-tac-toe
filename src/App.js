import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import SetupGame from './components/SetupGame';
import { GameProvider } from './contexts/GameContext';

const App = () => {
  const [gameMode, setGameMode] = useState('');
  const [playerName, setPlayerName] = useState('');

  return (
    <GameProvider>
      <div className="app flex justify-center items-center h-screen">
        {gameMode ? (
          <GameBoard playerName={playerName} gameMode={gameMode} />
        ) : (
          <SetupGame setPlayerName={setPlayerName} setGameMode={setGameMode} />
        )}
      </div>
    </GameProvider>
  );
};

export default App;
