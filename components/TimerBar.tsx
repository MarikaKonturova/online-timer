import { useAppDispatch } from '../app/hooks';
import { setMode } from '../features/timer/timerSlice';

export type TTimerBar = {
    setSecondsLeft: (value: number)=>void
    minutes: number
 
}
export const TimerBar = ( {setSecondsLeft, minutes}: TTimerBar) => {
const dispatch = useAppDispatch()

  return (
    <div className="timer_group">
    <p className="timer_text">choose timer</p>
    <div className="timer_bar">
      <input
        type="range"
        min="0"
        max="120"
        value={minutes}
        onChange={(e) => setSecondsLeft(+e.target.value * 60)}
      />
      <p className="timer_text">{minutes} min</p>
    </div>
    <button className="button" /* disabled={minutes===0} */ onClick={() => dispatch(setMode('timer'))}>
      start focus
    </button>
  </div>
  )
}
