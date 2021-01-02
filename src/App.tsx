import React, { useState } from 'react';
import TimerView from './Components/TimerView';
import Button from './Components/Button';
import { useInterval } from "./Hooks/useInterval";

const App: React.FC = () => {
  const [centiSeconds, setCentiSeconds] = useState<number>(0);
  const [isTimerStart, setTimerStart] = useState<number | null>(null)


  const onResetTimer = () => {
    setTimerStart(null);
    setCentiSeconds(0);
  }
  const onStartTimer = () => {
    setTimerStart(10);
  }
  const onStopTimer = () => {
    setTimerStart(null);
  }

  const timerHandler = () => {
    setCentiSeconds(p => p + 1);
  };

  useInterval(timerHandler, isTimerStart);

  return (
    <div className="App">
      <TimerView centiSeconds={centiSeconds} />
      <div className="btn-wrapper">
        <Button id="startBtn" name="Start" classes="btn-inset"
          disabled={typeof isTimerStart === "number"}
          onClick={onStartTimer}
        />
        <Button id="stopBtn" name="Stop" classes="btn-outset"
          disabled={typeof isTimerStart !== "number"}
          onClick={onStopTimer}
        />
        <Button id="resetBtn" name="Reset" classes="btn-outset" style={{ flexBasis: "100%", marginTop: "16px" }}
          disabled={centiSeconds === 0}
          onClick={onResetTimer}
        />
      </div>
    </div>
  );
}

export default App;
