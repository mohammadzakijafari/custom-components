import React, { createContext, useContext, useReducer, type ReactNode } from 'react'

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

// ------------ Initial State of Reducer, indicating the type -----------------
const initialState: TimersState = {
    isRunning: true,
    timers: [],
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

// --------------- Action Type for Timer Reducer Function -------------------
type StartTimerAction = {
    type: 'START_TIMER';
}

type StopTimerAction = {
    type: 'STOP_TIMER';
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer,
}

type Action = StartTimerAction | StopTimerAction | AddTimerAction;

// ---------------- Time Reducer Function ------------------ 
function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMER') {
        return {
            ...state,
            isRunning: true,
        };
    }
    if (action.type === 'STOP_TIMER') {
        return {
            ...state,
            isRunning: false,
        }
    }
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration,
                },
            ],
        };
    }

    // -------------- Returning the state, otherwise we will get an error ---------------
    return state;
}
export default function TimersContextProvider({ children }: TimersContextValueProps) {

    // -------------- using Reducer to handle change state ----------------
    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimer() {
            dispatch({ type: 'START_TIMER' });
        },
        stopTimer() {
            dispatch({ type: 'STOP_TIMER' });
        }
    }
    return (
        <TimersContext.Provider value={ctx}> {children} </TimersContext.Provider>
    )
}