import { useAppDispatch } from "../app/hooks";
import { setMode } from "../features/timer/timerSlice";

export const TimerSuccess = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="timer_group" style={{ flexDirection: "row" }}>
      <p className="timer_success">The session is done!</p>
      <button
        className="button"
        onClick={() => {
          dispatch(setMode("choose"));
        }}
      >
        ok
      </button>
    </div>
  );
};
