import { useState, useCallback } from "react"

import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../questions.js';
import quizImg from '../assets/quiz-complete.png';


export default function Quiz() {
    const shuffledAnswered =  useRef();
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerSate, setAnswerState] = useState('');
    const activeQuestionIndex = answerSate === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevUserAnswer => {
            return [...prevUserAnswer, selectedAnswer];
        }));

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000)
        }, 1000)

    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => { handleSelectAnswer(null) }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        )

    }
    if(!shuffledAnswered.current){
        shuffledAnswered.current = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswered.current.sort(() => Math.random() - 0.5);
    }

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {suffledAnswers.map((answer) => {
                        const isSelected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClasses = '';

                        if (answerSate === 'answered' && isSelected) {
                            cssClasses = 'selected'
                        }
                        if((answerSate === 'correct' || answerSate === 'worng') && isSelected){
                            cssClasses = answerSate;
                        }

                        return (<li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>{answer}</button>
                        </li>)
                    }

                    )}
                </ul>
            </div>
        </div>
    )
}

