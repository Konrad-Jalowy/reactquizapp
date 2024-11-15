import LIST from "../../utils/list2";

function Question({idx}){

    return (
        <h2>{LIST[idx].question}</h2>
    )
}

export {Question};