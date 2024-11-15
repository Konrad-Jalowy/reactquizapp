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
        <div>
        <input 
        type="checkbox" 
        id="timedQuestions" 
        checked={timedQuestions} 
        onChange={onTimedQestionsChange}  />
        <label htmlFor="timedQuestions">Timed Questions: {timedQuestions ? 'YES' : 'NO'}</label>
        <p></p>
        <label htmlFor="questionTime">Question Time:</label>
        <p></p>
        <input 
        disabled={timedQuestions ? false: true}
        value={timePerQuestion} 
        onChange={onQuestionTimeChange} 
        type="range" 
        id="questionTime"  
        min="5" max="15" /> {timePerQuestion}s
        </div>
    )
}

export {QuestionTiming};