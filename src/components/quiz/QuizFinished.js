import { Score } from "./Score";
import { GeneralSummary } from "../summary/GeneralSummary";

function QuizFinished({answers, score}){
    return (
        <>
        <GeneralSummary answers={answers} score={score} />
        </>
    )
};

export {QuizFinished}