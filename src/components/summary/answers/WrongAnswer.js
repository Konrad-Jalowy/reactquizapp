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
        <h5 className="wrong">Wrong answer!</h5>
        </div>
        
        <ul className="answersList">
            {answers.map(([key, val]) => {
                console.log(key, val);
                if(key === chosen){
                    return <li key={key} style={{color: 'red',
                         textDecoration: 'line-through',
                        fontWeight: 'bold'}}>{val}</li> 
                }
                return <li key={key} style={ key === correctOne ? {color: 'green', fontWeight: 'bold'}: {}}>{val}</li>
            })}
        </ul>
        </>
    );
}

export {WrongAnswer};