import LIST from "../../utils/list2";

function SimpleSummary({idx}){
    
    return (
        <>
        <p>Question {idx + 1} / {LIST.length}</p>
        </>
    )
};

export {SimpleSummary};