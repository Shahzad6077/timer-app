import React from 'react';

const TimerView: React.FC = () => {
    return (
        <div className="timerView flex-center">
            <div className="dashedWrapper">
                <svg viewBox="0 0 120 120" >
                    <circle cx="50%" cy="50%" r="54" className="dashed" />
                </svg>
            </div>
            <div className="wrapper flex-center">
                <div className="digitView flex-center">
                    <h3>
                        00:15:04
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default TimerView;
