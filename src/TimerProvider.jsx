import { createContext, useContext, useState, useEffect, useRef } from "react";

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning === true) {
      intervalRef.current = setInterval((time) => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };
  const pause = () => {
    setIsRunning(false);
  };
  const clear = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <TimerContext.Provider value={{ time, isRunning, start, pause, clear }}>
        {children}
      </TimerContext.Provider>
    </>
  );
};

export default TimerProvider;
export const useTimer = () => useContext(TimerContext);
