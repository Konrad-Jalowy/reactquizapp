import { ShowCorrectCheckbox } from "./ShowCorrectCheckbox";
import { ShowScoreCheckbox } from "./ShowScoreCheckbox";
import { ShuffleAnswersCheckbox } from "./ShuffleAnswersCheckbox";
import { QuestionTiming } from "./QuestionTiming";
import './Form.css';
function Form({setMode}){
    return (
        <>
        <div className="options">
        <h2>Quiz Options:</h2>
            <div className="checkboxes">
        <ShuffleAnswersCheckbox/>
        <ShowScoreCheckbox/>
        <ShowCorrectCheckbox/>
        <QuestionTiming/>
        <button className="startBtn" onClick={() => setMode('quiz')}>Start</button>
        </div>
        
        </div>
        
        
        </>
    
    );
};

export {Form};

