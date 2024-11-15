import { Score } from "./Score";
import { GeneralSummary } from "../summary/GeneralSummary";

function QuizFinished({answers, score}){
    return (
        <>
        <h2>Quiz Finished</h2>
        <Score score={score} />
        <GeneralSummary answers={answers} />
        </>
    )
};

export {QuizFinished}