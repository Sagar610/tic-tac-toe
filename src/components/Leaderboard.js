const Leaderboard = ({ gameStatus }) => {
    return (
      <div className="leaderboard flex flex-col items-center justify-center p-4 w-full md:w-1/3">
        <h2 className="text-xl font-semibold">Leaderboard</h2>
        <div className="scoreboard mb-4">
          <p className="text-lg">X: 0</p>
          <p className="text-lg">O: 0</p>
        </div>
        <div className="timer">
          <p className="text-lg">{gameStatus ? gameStatus : 'Game in Progress'}</p>
        </div>
      </div>
    );
  };
  
  export default Leaderboard;
  