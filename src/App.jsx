import "./App.css";
import TimerProvider from "./TimerProvider";
import Timer from "./Timer";

function App() {
  return (
    <>
      <TimerProvider>
        <Timer />
      </TimerProvider>
    </>
  );
}

export default App;
