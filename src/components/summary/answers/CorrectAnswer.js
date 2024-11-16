import LIST from "../../../utils/list2";

function CorrectAnswer({idx}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    let correctOne = LIST[idx].correct;
    return (
        <>
        <div className="summaryHeading">
        <h3><span className="index-correct">Question {idx+1}: </span> <em>{LIST[idx].question}</em></h3>
        <h5 className="good">Good answer!</h5>
        </div>
        
        <ul className="answersListSummary">
            {answers.map(([key, val]) => {
                return <li key={key} style={ key === correctOne ? {color: 'green', fontWeight: 'bold'}: {}}>{val}</li>
            })}
        </ul>
        </>
    );
};

export {CorrectAnswer};