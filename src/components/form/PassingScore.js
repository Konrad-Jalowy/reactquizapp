import { useQuizWithDispatch } from "../../context/quizcontext";

function PassingScore(){
    const [{passingScore}, dispatch] = useQuizWithDispatch();

    function onPassingScoreChange(e){
        dispatch({type: 'passingScoreChange', payload: e.target.value});
    }
    return (
        <>
        <div>
        <label htmlFor="passingScore">Passing Score: {passingScore}pt</label>
        <p></p>
        <input 
        value={passingScore} 
        onChange={onPassingScoreChange} 
        type="range" 
        id="passingScore"  
        min="1" max="3" /> 
        </div>
        </>
    )
};

export {PassingScore};