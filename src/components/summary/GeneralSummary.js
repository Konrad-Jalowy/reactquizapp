import { ClickableSummary } from "./ClickableSummary";
import { PercentSummary } from "./PercentSummary";
import './Summary.css';

function GeneralSummary({answers, score}){

    
   
    return (
        <>
        <h2 style={{textAlign: 'center'}}>Quiz Finished!</h2>
        <PercentSummary answers={answers} score={score}/>
        <hr/>
        <ClickableSummary answers={answers} />
        
        </>
    )
};

export {GeneralSummary};