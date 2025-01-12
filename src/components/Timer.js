import React, { useEffect, useState } from 'react';

const Timer = ({ gameMode }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Start and update the timer every second
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    // Cleanup interval when the component unmounts
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time as mm:ss
  const formattedTime = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

  return (
    <div className="timer p-4 bg-gray-900 rounded-lg shadow-lg text-white">
      <p className="text-xl text-center">Time: {formattedTime}</p>
    </div>
  );
};

export default Timer;
