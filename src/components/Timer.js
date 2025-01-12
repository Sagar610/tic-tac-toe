const Timer = ({ timeLeft }) => {
    return (
      <div className="timer p-4 text-center">
        <p className="text-xl">Time Left: {timeLeft} seconds</p>
      </div>
    );
  };
  
  export default Timer;
  