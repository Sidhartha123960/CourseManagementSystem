import React, { useEffect, useState } from 'react';

function CountdownTimer({ initialTime }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1000); // decrement by 1 second (1000 milliseconds)
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p style={{ marginLeft:"10px" , marginTop:"-20px", color:"red" , fontSize:"15px" , marginBottom:"-10px"}}>Login Time: {formatTime(Math.max(0, timeLeft / 1000))}</p>
    </div>
  );
}
export default CountdownTimer;