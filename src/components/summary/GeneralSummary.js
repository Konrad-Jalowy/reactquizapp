import { ClickableSummary } from "./ClickableSummary";
import './Summary.css';

function GeneralSummary({answers}){

    let correct = [...answers].filter((answer) => answer.isCorrect === true ).length;
    let wrong = [...answers].filter((answer) => answer.isCorrect === false ).length;
    let skipped = [...answers].filter((answer) => answer.isSkipped === true ).length;
    let max = answers.length
   
    return (
        <>
        {/* <p><span>Correct: {correct}</span> / <span style={{color: 'blue'}}>{max} ({Math.round((correct / max) * 100)}%)</span></p>
        <p><span>Wrong: {wrong}</span> / <span  style={{color: 'blue'}}>{max} ({Math.round((wrong / max) * 100)}%)</span></p>
        <p><span>Skipped: {skipped}</span> / <span style={{color: 'blue'}}>{max} ({Math.round((skipped / max) * 100)}%)</span> </p> */}
        <ClickableSummary answers={answers} />
        </>
    )
};

export {GeneralSummary};