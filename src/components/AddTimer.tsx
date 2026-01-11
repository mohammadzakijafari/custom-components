import React, { useRef, useState, type ElementType, type FormEvent } from 'react'
import { useTimersContext } from '../store/timersContext';

const AddTimer = () => {
  // -------------- Accessing Timer Context --------------------
  const { addTimer } = useTimersContext();

  // ----------------- State Declaration for Timer name and duration ----------------
  const [timerName, setTimerName] = useState<string>('');
  const [timerDuration, setTimerDuration] = useState<number>(0);

  // -------------- handle Input Change ---------------
  const handleTimerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerName(event.target.value)
  }

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimerDuration(parseInt(event.target.value));
  }

  // ------------------- Handling The Submit Event --------------------
  const handleTimerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTimer({ name: timerName, duration: timerDuration });
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleTimerSubmit} className='flex flex-col items-center gap-5'>
      <input type='text' name='timer-name' value={timerName} onChange={handleTimerChange}
        className='border border-gray-400 py-1 w-56 rounded'
        placeholder='Timer Name' />
      <input type='number' name='timer-duration' value={timerDuration} onChange={handleDurationChange}
        className='border border-gray-400 py-1 w-56 rounded' />

      <button className='bg-green-600 px-4 py-2 rounded text-white'> Add Timer </button>
    </form>
  )
}

export default AddTimer