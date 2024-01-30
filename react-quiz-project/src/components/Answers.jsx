import { useRef } from "react";
export default function Answers({answers, selectedAnswer, answerSate ,onSelect}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }
    
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerSate === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerSate === "correct" || answerSate === "wrong") &&
          isSelected
        ) {
          cssClass = answerSate;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerSate !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
