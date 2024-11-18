import { useQuizWithDispatch } from "../../context/quizcontext";

function PassingScore(){
    const [{passingScore}, dispatch] = useQuizWithDispatch();
    return (
        <>
        <div className="checkbox">

        </div>
        </>
    )
};

export {PassingScore};