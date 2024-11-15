import { useState, useEffect } from 'react';

export default function Timer({ timeout, onTimeout, blocked}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    let timer;

    timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    let interval;
    if(blocked === false){
        interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
          }, 100);
    } else {
        clearInterval(interval);
    }
    
    return () => {
      clearInterval(interval);
    };
  }, [blocked]);

    return (
        <progress
          id="timer"
          max={timeout}
          value={remainingTime}
        />
      );
};