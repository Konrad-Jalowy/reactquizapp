import { ShowCorrectCheckbox } from "./ShowCorrectCheckbox";
import { ShowScoreCheckbox } from "./ShowScoreCheckbox";
import { ShuffleAnswersCheckbox } from "./ShuffleAnswersCheckbox";
import { QuestionTiming } from "./QuestionTiming";
import './Form.css';
function Form({setMode}){
    return (
        <>
        <h3>Quiz Options:</h3>
        <div className="options">
            <div className="checkboxes">
        <ShuffleAnswersCheckbox/>
        <ShowScoreCheckbox/>
        <ShowCorrectCheckbox/>
        <QuestionTiming/>
        </div>
        <button onClick={() => setMode('quiz')}>Start</button>
        </div>
        
        
        </>
    
    );
};

export {Form};

