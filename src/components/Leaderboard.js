const Leaderboard = ({ gameStatus }) => {
    return (
      <div className="leaderboard p-4 bg-gray-900 rounded-lg shadow-lg text-white">
        <h2 className="text-xl font-semibold text-center mb-4">Leaderboard</h2>
        <div className="scoreboard text-center space-y-2">
          <p className="text-lg">X: 0</p>
          <p className="text-lg">O: 0</p>
        </div>
        <div className="game-status text-center mt-4">
          <p className="text-lg">{gameStatus ? gameStatus : 'Game in Progress'}</p>
        </div>
      </div>
    );
  };
  
  export default Leaderboard;
  