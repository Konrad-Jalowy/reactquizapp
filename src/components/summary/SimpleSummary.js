import LIST from "../../utils/list2";

function SimpleSummary({idx}){
    
    return (
        <>
        <span>Question {idx + 1} / {LIST.length}</span>
        </>
    )
};

export {SimpleSummary};