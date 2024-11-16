import { useState, useRef } from "react";
import { SkippedAnswer } from "./answers/SkippedAnswer";
import { WrongAnswer } from "./answers/WrongAnswer";
import { CorrectAnswer } from "./answers/CorrectAnswer";
import LIST from "../../utils/list2";
function ClickableSummary({answers}){

    const [index, setIndex] = useState(0);
    const answer = useRef(null);
    const maxIndex = LIST.length - 1;

    function nextClickHandler(){
        setIndex(p => p + 1);
    }

    function prevClickHandler(){
        setIndex(p => p - 1);
    }

    answer.current = answers[index];
    console.log(answer.current);


    return (
        <>
        {answer.current.isSkipped && <SkippedAnswer idx={index} /> }
        {answer.current.isCorrect && <CorrectAnswer idx={index}/>}
        {(answer.current.isCorrect === false) && <WrongAnswer idx={index} chosen={answer.current.chosenAnswer}/>}
        <div className="summaryButtons">
        <button onClick={prevClickHandler} disabled={index === 0}>Previous</button>
        <button onClick={nextClickHandler} disabled={index === maxIndex}>Next</button>
        </div>
        </>
    )
};

export {ClickableSummary};