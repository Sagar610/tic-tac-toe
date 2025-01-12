const Timer = ({ timer }) => {
    return (
      <div className="timer p-4 bg-gray-900 rounded-lg shadow-lg text-white">
        <p className="text-xl text-center">Time Left: {timer}s</p>
      </div>
    );
  };
  
  export default Timer;
  