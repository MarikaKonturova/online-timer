import React from 'react'
import { setMode } from '../features/timer/timerSlice';
import { useAppDispatch } from './../app/hooks';

export type TTimerСlock = {
    minutes: number
    seconds: number
    
}
export const TimerClock = ({minutes, seconds}: TTimerСlock) => {
  const dispatch = useAppDispatch()
  return (
    <div className="timer_group" style={{ flexDirection: "row" }}>
            <div className="clock">
              <div className="clock_group">
                <p className="clock_num">{minutes}</p>
                <p className="clock_text">minutes</p>
              </div>
              <p className="clock_num">:</p>
              <div className="clock_group">
                <p className="clock_num">{seconds<10? `0${seconds}` : seconds}</p>
                <p className="clock_text">seconds</p>
              </div>
            </div>
            <button className="button" onClick={() => dispatch(setMode('choose'))}>
              stop focus
            </button>
          </div>
  )
}
