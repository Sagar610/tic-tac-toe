import React from 'react';
import useGameLogic from '../hooks/useGameLogic';
import Leaderboard from './Leaderboard';

const GameBoard = ({ playerName, gameMode }) => {
  const { board, isXTurn, gameStatus, handleClick } = useGameLogic();

  return (
    <div className="flex">
      <div className="game-board w-full md:w-2/3 flex flex-wrap">
        {board.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-1/3 h-32 flex items-center justify-center border-2 ${
              value === 'X' ? 'text-red-600' : value === 'O' ? 'text-blue-600' : 'text-black'
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <Leaderboard gameStatus={gameStatus} />
    </div>
  );
};

export default GameBoard;
