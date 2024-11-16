import LIST from "../../utils/list2";
import './Question.css';
function Question({idx}){

    return (
        <h2><span className="index">Question {idx+1}:</span> <em>{LIST[idx].question}</em></h2>
    )
}

export {Question};