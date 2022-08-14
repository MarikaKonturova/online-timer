import { useState, useEffect, useCallback, useRef } from "react";
import { TimerBar } from "../components/TimerBar";
import { TimerClock } from "../components/TimerClock";
import { TimerSuccess } from "../components/TimerSuccess";
import ReactCanvasConfetti from "react-canvas-confetti";
import { canvasStyles, getAnimationSettings } from "../utils/fireworks";
import MarkUp from "../components/MarkUp";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setMode } from "../features/timer/timerSlice";
const Timer = () => {
  const mode = useAppSelector((state) => state.timer.mode);
  const dispatch = useAppDispatch();
  const [secondsLeft, setSecondsLeft] = useState(10);

  /* fireworks stuff*/
  const refAnimationInstance = useRef<any>(null);
  const [intervalId, setIntervalId] = useState<any>();

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings());
      refAnimationInstance.current(getAnimationSettings());
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 16));
    }
  }, [nextTickAnimation, intervalId]);

  useEffect(() => {
    if (mode === "timer" && secondsLeft === 0) {
      startAnimation();
      dispatch(setMode("success"));
      return;
    }
    const interval = setInterval(() => {
      if (!(mode === "timer")) {
        return;
      }
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(intervalId);
    };
  }, [secondsLeft, intervalId, startAnimation, dispatch, mode]);

  /* const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);  */
  /* for mark up */
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <main className="timer">
      <MarkUp minutes={minutes} />

      {mode === "choose" ? (
        <TimerBar minutes={minutes} setSecondsLeft={setSecondsLeft} />
      ) : mode === "timer" ? (
        <TimerClock seconds={seconds} minutes={minutes} />
      ) : (
        <>
          <TimerSuccess />
          {/* @ts-ignore */}
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </>
      )}
    </main>
  );
};
export default Timer;
