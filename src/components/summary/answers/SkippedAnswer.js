import LIST from "../../../utils/list2";

function SkippedAnswer({idx}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    let correctOne = LIST[idx].correct;
    return (
        <>
        <div className="summaryHeading">
        <h3>Question {idx+1}: <em>{LIST[idx].question}</em></h3>
        <h5 className="skipped">You skipped!</h5>
        </div>
        
        <ul className="answersList">
            {answers.map(([key, val]) => {
                return <li key={key} style={ key === correctOne ? {color: 'green', fontWeight: 'bold'}: {}}>{val}</li>
            })}
        </ul>
        </>
    );
};

export {SkippedAnswer};