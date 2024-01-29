import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
export default function Question({questionText, answers, selectedAnswer, answerSate ,onTimeout,onSelect,index}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onTimeout}
      />
      <h2>{questionText}</h2>
      <Answers
        key={index}
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerSate={answerSate}
        onSelect={onSelect}
      ></Answers>
    </div>
  );
}
