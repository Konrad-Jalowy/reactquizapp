import LIST from "../../../utils/list2";

function WrongAnswer({idx, chosen}){
    let answersRaw = LIST[idx].answers;
    let answers = [...Object.entries(answersRaw)];
    console.log(answers);
    let correctOne = LIST[idx].correct;
    return (
        <>
        <h3 style={{color: 'red'}}>Question {idx+1}: <em>{LIST[idx].question}</em></h3>
        <h5 style={{color: 'red'}}>Wrong answer!</h5>
        <ul>
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