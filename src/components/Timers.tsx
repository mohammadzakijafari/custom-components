import React from 'react'
import { useTimersContext } from '../store/timersContext'
import Timer from './Timer';

const Timers = () => {
    // --------------- Accessing context Data ------------------
    const { timers } = useTimersContext();
    return (
        <div className='mx-12 my-10'>
            <ul className='flex gap-10'>
                {timers.map((timer) => <li key={timer.name}>
                    <Timer {...timer} />
                </li>)}
            </ul>
        </div>
    )
}

export default Timers