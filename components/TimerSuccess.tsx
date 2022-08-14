import React from "react";
import { useAppDispatch } from "../app/hooks";
import { setMode, setSuccess, setTimer } from "../features/timer/timerSlice";

export const TimerSuccess = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="timer_group" style={{ flexDirection: "row" }}>
      <p className="timer_success">The session is done!</p>
      <button
        className="button"
        onClick={() => {
          dispatch(setTimer(false));
          dispatch(setSuccess(false));
          dispatch(setMode("choose"));
        }}
      >
        ok
      </button>
    </div>
  );
};
