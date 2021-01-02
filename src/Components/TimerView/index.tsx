import React from 'react';
import { toHHMMSS } from "./../../Helpers"
type Props = {
    centiSeconds: number
}
const TimerView: React.FC<Props> = ({ centiSeconds }) => {
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
                        {toHHMMSS(centiSeconds)}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default TimerView;
