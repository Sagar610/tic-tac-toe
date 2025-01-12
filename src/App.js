import React, { useState } from 'react';
import SetupGame from './components/SetupGame';
import GameBoard from './components/GameBoard';
import Leaderboard from './components/Leaderboard';
import Timer from './components/Timer';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Sagar', score: 2000 },
    { name: 'Madhavi', score: 1500 },
  ]);

  const handleGameEnd = (score) => {
    const newEntry = { name: playerName, score };
    setLeaderboard((prevLeaderboard) => {
      const updatedLeaderboard = [...prevLeaderboard, newEntry];
      updatedLeaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard by score
      return updatedLeaderboard;
    });
  };

  return (
    <div className="App flex flex-row p-8">
      <div className="game-board w-2/3 pr-4">
        {!playerName ? (
          <SetupGame setPlayerName={setPlayerName} setGameMode={setGameMode} />
        ) : (
          <GameBoard playerName={playerName} gameMode={gameMode} onGameEnd={handleGameEnd} />
        )}
      </div>
      <div className="leaderboard-section w-1/3 pl-4">
        <Leaderboard leaderboard={leaderboard} />
        <Timer gameMode={gameMode} />
      </div>
    </div>
  );
}

export default App;
