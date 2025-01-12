const SetupGame = ({ setPlayerName, setGameMode }) => {
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
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setPlayerName(e.target.value)}
          className="mt-4 p-3 w-full rounded-lg border-2 border-gray-300 text-lg"
        />
      </div>
    );
  };
  
  export default SetupGame;
  