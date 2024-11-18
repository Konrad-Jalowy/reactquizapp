import { useQuiz } from "../../context/quizcontext";

function PassedOrFailed({score}){
    const {passingScore} = useQuiz();
    let message = score >= passingScore ? `You passed!` : `You failed`;

    return (
        <>
        <h3>{message}</h3>
        <p>Minimum to pass the test is {passingScore}pt</p>
        </>
    )
};

export {PassedOrFailed};