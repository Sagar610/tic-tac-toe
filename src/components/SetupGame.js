const SetupGame = ({ setPlayerName, setGameMode }) => {
    return (
      <div className="game-setup">
        <h2 className="text-xl mb-4">Select Game Mode</h2>
        <button onClick={() => setGameMode('friend')} className="btn">
          Play with Friend
        </button>
        <button onClick={() => setGameMode('bot')} className="btn">
          Play with Bot
        </button>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setPlayerName(e.target.value)}
          className="mt-4 p-2 border"
        />
      </div>
    );
  };
  
  export default SetupGame;
  