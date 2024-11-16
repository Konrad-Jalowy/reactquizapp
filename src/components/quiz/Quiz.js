import { useState } from "react";
import { Score } from "./Score";
import { QuizFinished } from "./QuizFinished";
import LIST from "../../utils/list2";
import Timer from "./Timer";
import prepareAnswer from "../../utils/prepareAnswer";
import { AnswersList } from "./AnswersList";
import { useQuiz } from "../../context/quizcontext";
import { Question } from "./Question";


function Quiz(){

    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [timerBlocked, setTimerBlocked] = useState(false);
    const maxIndex = LIST.length;
    const {shuffleAnswers, timePerQuestion, timedQuestions, showCorrect, showScore} = useQuiz();
    

    let shouldRenderQuestion = true;
    if(index === maxIndex){
        shouldRenderQuestion = false;
    }

    function setNextQuestion(ans){
        let answered = prepareAnswer(index, ans);
        setAnswers(prev => [...prev, answered]);
        if(answered.isCorrect === true){
            setScore((s) => s + 1);
        }
        if(index < maxIndex)
            setIndex((i) => i + 1);
        setTimerBlocked(false);
      }
      function skipQuestion(){
        let skippedQuestion = {
          questionNumber: index,
          chosenAnswer: null,
          isCorrect: null,
          isSkipped: true,
        }
        setAnswers(prev => [...prev, skippedQuestion]);
        if(index < maxIndex)
          setIndex((i) => i + 1);
      }
    if(shouldRenderQuestion){
        return (
            <>
            {showScore ? <Score score={score} /> : null}
            {timedQuestions ?  
            <Timer 
            key={index+1} 
            timeout={timePerQuestion * 1000} 
            onTimeout={timerBlocked ? null : skipQuestion} 
            blocked={timerBlocked}
            /> : null }
            <Question idx={index}/> 
            <AnswersList 
            idx={index} 
            shuffle={shuffleAnswers}
            key={index} 
            setTimerBlocked={setTimerBlocked}
            setNextQuestion={setNextQuestion } 
            skipQuestion={skipQuestion}
            showCorrect={showCorrect}/> 
            </>
        );
    };
    

    return (
        <>
        <QuizFinished score={score} answers={answers} />
        </>
    )
};

export {Quiz};