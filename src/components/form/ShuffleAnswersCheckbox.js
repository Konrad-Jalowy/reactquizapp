import { useQuizWithDispatch } from "../../context/quizcontext";

function ShuffleAnswersCheckbox(){

    const [{shuffleAnswers}, dispatch] = useQuizWithDispatch();
    return (
        <div className="checkbox">
        <input 
        type="checkbox" 
        id="shuffleAnswers" 
        checked={shuffleAnswers}
        onChange={() => dispatch({type: 'toggleShuffleAnswers'})} />
        <label htmlFor="shuffleAnswers">Shuffle Answers: {shuffleAnswers ? 'YES' : 'NO'}</label>
        </div>
    )
}

export {ShuffleAnswersCheckbox};