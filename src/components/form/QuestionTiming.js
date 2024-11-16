import { useQuizWithDispatch } from "../../context/quizcontext";

function QuestionTiming(){

    const [{timedQuestions, timePerQuestion}, dispatch] = useQuizWithDispatch();
    

    function onQuestionTimeChange(e){
        dispatch({type: 'questionTimeChange', payload: e.target.value});
    }

    function onTimedQestionsChange(){
        dispatch({type: "toggleTimedQuestions"})
    }

    return (
        <>
        <div className="checkbox">
        <input 
        type="checkbox" 
        id="timedQuestions" 
        checked={timedQuestions} 
        onChange={onTimedQestionsChange}  />
        <label htmlFor="timedQuestions">Timed Questions: {timedQuestions ? 'YES' : 'NO'}</label>
        </div>
        <div className="qTime">
        <label htmlFor="questionTime">Question Time: {timePerQuestion}s</label>
        
        <input 
        disabled={timedQuestions ? false: true}
        value={timePerQuestion} 
        onChange={onQuestionTimeChange} 
        type="range" 
        id="questionTime"  
        min="5" max="15" /> 
        </div>
        </>
        
    )
}

export {QuestionTiming};