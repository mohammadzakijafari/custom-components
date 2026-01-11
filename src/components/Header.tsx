import React from 'react'
import { useTimersContext } from '../store/timersContext'

const Header = () => {
    // ---------------- Accessing Timers Context inside Header ------------------
    const timersCtx = useTimersContext();
    // console.log(timersCtx);

    return (
        <div className='flex justify-between py-10 px-14'>
            <h1 className='text-3xl font-semibold'> React Timer</h1>
            <button
                onClick={timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer}
                className='border border-gray-400 px-4 py-2 rounded'>
                {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
            </button>
        </div>
    )
}

export default Header