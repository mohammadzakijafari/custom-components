import React from 'react'
import { useTimersContext } from '../store/timersContext'

const Header = () => {
    // ---------------- Accessing Timers Context inside Header ------------------
    const timersCtx = useTimersContext();

    return (
        <div>
            <h1 className=''> React Timer</h1>
            <button className=''> {timersCtx.isRunning ? 'Stop' : 'Start'} Timers </button>
        </div>
    )
}

export default Header