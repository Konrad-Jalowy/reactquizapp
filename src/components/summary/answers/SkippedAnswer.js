import LIST from "../../../utils/list2";

function SkippedAnswer({idx}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    let correctOne = LIST[idx].correct;
    return (
        <>
        <div className="summaryHeading">
        <h3><span className="index-skipped">Question {idx+1}: </span> <em>{LIST[idx].question}</em></h3>
        <h5 className="skipped">∅ You skipped!</h5>
        </div>
        
        <ul className="answersListSummary">
            {answers.map(([key, val]) => {
                return (<li 
                    key={key} 
                    className={key === correctOne ? "correct-one" : ""}>{val}</li>)
            })}
        </ul>
        </>
    );
};

export {SkippedAnswer};