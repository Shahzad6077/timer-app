import React from 'react';
import TimerView from './Components/TimerView';
import Button from './Components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <TimerView />
      <div className="btn-wrapper">
        <Button name="Start" classes="btn-inset" />
        <Button name="Reset" classes="btn-outset" />
        <Button name="Stop" classes="btn-outset" style={{ flexBasis: "100%", marginTop: "16px" }} />
      </div>
    </div>
  );
}

export default App;
