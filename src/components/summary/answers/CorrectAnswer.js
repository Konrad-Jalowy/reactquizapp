import LIST from "../../../utils/list2";

function CorrectAnswer({idx}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    let correctOne = LIST[idx].correct;
    return (
        <>
        <h3 style={{color: 'green'}}>Question {idx+1}: <em>{LIST[idx].question}</em></h3>
        <h5 style={{color: 'green'}}>Good answer!</h5>
        <ul>
            {answers.map(([key, val]) => {
                return <li key={key} style={ key === correctOne ? {color: 'green', fontWeight: 'bold'}: {}}>{val}</li>
            })}
        </ul>
        </>
    );
};

export {CorrectAnswer};