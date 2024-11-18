import LIST from "../../../utils/list2";

function WrongAnswer({idx, chosen}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    console.log(answers);
    let correctOne = LIST[idx].correct;
    return (
        <>
        <div className="summaryHeading">
        <h3><span className="index-wrong">Question {idx+1}: </span><em>{LIST[idx].question}</em></h3>
        <h5 className="wrong">&#10060;Wrong answer!</h5>
        </div>
        
        <ul className="answersListSummary">
            {answers.map(([key, val]) => {
                console.log(key, val);
                if(key === chosen){
                    return <li key={key} className="wrong-one chosen-one">{val}</li> 
                }
                return <li key={key} className={key === correctOne ? "correct-one" : ""}>{val}</li>
            })}
        </ul>
        </>
    );
}

export {WrongAnswer};