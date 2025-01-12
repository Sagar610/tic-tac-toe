import React, { useState } from 'react';

const SetupGame = ({ setPlayerName, setGameMode }) => {
  const [nameInput, setNameInput] = useState("");

  const handleNameChange = (e) => {
    setNameInput(e.target.value); // Update the name input state
  };

  const handleStartGame = () => {
    if (nameInput.trim()) {
      setPlayerName(nameInput);  // Set the player name to the parent component
      setGameMode("friend"); // Or change to bot mode if necessary
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="game-setup flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-white mb-4">Select Game Mode</h2>
      <button
        onClick={() => setGameMode('friend')}
        className="btn bg-green-500 text-white p-2 rounded-lg w-full hover:bg-green-600 transition-all duration-200"
      >
        Play with Friend
      </button>
      <button
        onClick={() => setGameMode('bot')}
        className="btn bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition-all duration-200"
      >
        Play with Bot
      </button>
      
      {/* Player name input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={nameInput}
        onChange={handleNameChange}
        className="mt-4 p-3 w-full rounded-lg border-2 border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button
        onClick={handleStartGame}
        className="btn bg-yellow-500 text-white p-2 rounded-lg w-full hover:bg-yellow-600 transition-all duration-200 mt-4"
      >
        Start Game
      </button>
    </div>
  );
};

export default SetupGame;
