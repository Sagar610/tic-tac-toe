import React from 'react';

const Leaderboard = ({ leaderboard = [] }) => {
  return (
    <div className="leaderboard w-full h-full bg-gray-800 p-4 rounded-lg shadow-lg text-white overflow-y-scroll">
      <h2 className="text-xl font-semibold text-center mb-4">Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p className="text-center text-lg">No scores yet.</p>
      ) : (
        leaderboard.map((entry, index) => (
          <div key={index} className="leaderboard-entry flex justify-between py-2">
            <span>{index + 1}. {entry.name}</span>
            <span>{entry.score}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Leaderboard;
