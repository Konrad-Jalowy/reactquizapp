import { ShowCorrectCheckbox } from "./ShowCorrectCheckbox";
import { ShowScoreCheckbox } from "./ShowScoreCheckbox";
import { ShuffleAnswersCheckbox } from "./ShuffleAnswersCheckbox";
import { QuestionTiming } from "./QuestionTiming";

function Form({setMode}){
    return (
        <>
        <h3>Quiz Options:</h3>
        <ShuffleAnswersCheckbox/>
        <ShowScoreCheckbox/>
        <ShowCorrectCheckbox/>
        <QuestionTiming/>
        <button onClick={() => setMode('quiz')}>Start</button>
        </>
    
    );
};

export {Form};

