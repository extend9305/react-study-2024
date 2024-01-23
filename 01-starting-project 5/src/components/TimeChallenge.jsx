import { useState, useRef } from "react";
import ResultModel from "../components/ResultModel.jsx";
export default function TimeChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining ,setTimeRemaining] = useState(targetTime * 1000);

    const tiemerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining=>prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} seconds{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={tiemerIsActive ? handleStop : handleStart}>
                        {tiemerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={tiemerIsActive ? 'active' : undefined}>
                    {tiemerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}