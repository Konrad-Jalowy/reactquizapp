import { useQuizWithDispatch } from "../../context/quizcontext";
function ShowScoreCheckbox(){
    const [{showScore}, dispatch] = useQuizWithDispatch();
    return (
        <div className="checkbox">
        <input 
        type="checkbox" 
        id="showScore" 
        checked={showScore}
        onChange={() => dispatch({type: 'toggleShowScore'})} />
        <label htmlFor="showScore">Show score: {showScore ? 'YES' : 'NO'}</label>
        </div>
    )
}

export {ShowScoreCheckbox};