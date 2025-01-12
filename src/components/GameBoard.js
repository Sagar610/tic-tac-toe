import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import Leaderboard from './Leaderboard';
import Timer from './Timer';

const GameBoard = ({ playerName, gameMode }) => {
  const { board, isXTurn, gameStatus, handleClick, timer } = useGameLogic();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 space-x-8">
      {/* Game Board */}
      <div className="game-board flex flex-wrap w-full md:w-2/3 bg-gray-800 p-4 rounded-xl shadow-xl">
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-1/3 h-40 flex items-center justify-center text-8xl font-bold cursor-pointer transition-all duration-200 ease-in-out transform ${
              value === 'X'
                ? 'text-red-600 hover:scale-110'
                : value === 'O'
                ? 'text-blue-600 hover:scale-110'
                : 'text-white hover:bg-gray-500'
            } border-2 border-white rounded-lg`}
          >
            {value}
          </div>
        ))}
      </div>

      {/* Leaderboard and Timer */}
      <div className="leaderboard w-full md:w-1/3 p-4 space-y-6">
        <Leaderboard gameStatus={gameStatus} />
        <Timer timer={timer} />
      </div>
    </div>
  );
};

export default GameBoard;
