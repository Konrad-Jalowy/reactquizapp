import { ClickableSummary } from "./ClickableSummary";
import { PercentSummary } from "./PercentSummary";
import './Summary.css';

function GeneralSummary({answers, score}){

    
   
    return (
        <>
        <ClickableSummary answers={answers} />
        <PercentSummary answers={answers} score={score}/>
        </>
    )
};

export {GeneralSummary};