import React, { useEffect, useRef, useState } from 'react'
import { useTimersContext, type Timer as TimerProps } from '../store/timersContext'

const Timer = ({ name, duration }: TimerProps) => {
  const interval = useRef<number>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  // ------------- Checking for remaining Time to stop the timer ----------------
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  // ----------------- Implementing useEffect and setInterval function ------------------
  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <div className='flex flex-col items-center justify-center h-64 w-64 bg-gray-300 gap-4 rounded'>
      <h2> {name} </h2>
      <progress max={duration * 1000} value={remainingTime}> {duration} </progress>
      <p> {formattedRemainingTime} </p>
    </div>
  )
}

export default Timer