import { useEffect, useRef } from "react";
import {useTimer} from './TimerProvider'

export default function Timer() {
  const { time, isRunning, start, pause, clear } = useTimer();
  const timerRef = useRef(null);

 useEffect(() => {
    if (timerRef.current) {
      timerRef.current.style.background = isRunning ? "lightgray" : "lightgreen";
    }
  }, [isRunning]);

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "1rem",
        width: "250px",
        margin: "3rem auto",
        boxShadow: "0 0 20px #00ff99",
      }}
    >
      <h1>{Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</h1>

      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button ref={timerRef} onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={clear}>Reset</button>
      </div>
    </div>
  );
}
