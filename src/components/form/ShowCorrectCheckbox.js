import { useQuizWithDispatch } from "../../context/quizcontext";

function ShowCorrectCheckbox(){
    const [{showCorrect}, dispatch] = useQuizWithDispatch();
    return (
        <div className="checkbox">
        <input 
        type="checkbox" 
        id="showCorrect" 
        checked={showCorrect}
        onChange={() => dispatch({type: 'toggleShowCorrect'})} />
        <label htmlFor="showCorrect">Show correct: {showCorrect ? 'YES' : 'NO'}</label>
        </div>
    )
}

export {ShowCorrectCheckbox};