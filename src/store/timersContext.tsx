import React, { createContext, useContext, type ReactNode } from 'react'

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
}

// ------------- Creating Context --------------
const TimersContext = createContext<TimersContextValue | null>(null);

// ------------ Creating and Exporting custom Hook to avoid errors for Timers ---------------
export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    if (timersCtx === null) {
        throw new Error('TimersContext is null. That should not be the case!');
    }
    return timersCtx;
}

type TimersContextValueProps = {
    children: ReactNode;
}

export default function TimersContextProvider({ children }: TimersContextValueProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: false,
        addTimer(timerData) {

        },
        startTimer() {

        },
        stopTimer() {

        }
    }
    return (
        <TimersContext.Provider value={ctx}> {children} </TimersContext.Provider>
    )
}