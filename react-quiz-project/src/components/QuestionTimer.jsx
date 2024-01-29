import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        const timer = setTimeout(onTimeout, timeout);

        return ()=>{
            clearTimeout(timeout);
        }
    },[timeout ,onTimeout]);

    useEffect(() => {
        const remainTimeInterval =  setInterval(() => {
            setRemainingTime((prevRemainingTime)=> prevRemainingTime - 100);
        }, 100);
        
        return ()=>{
            clearInterval(remainTimeInterval);
        }
    }, [])

    return <progress id="question-time" max={timeout} value={remainingTime}/>;
}