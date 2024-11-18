import { useQuiz } from "../../context/quizcontext";

function PassedOrFailed({score}){
    const {passingScore} = useQuiz();

    const passed = (score >= passingScore);
    let message = passed ? `❎You passed!` : `You failed!`;

    return (
        <>
        <h3 className={passed ? 'passed' : 'failed'}>{message}</h3>
        <p className="minimum-to-pass">Minimum to pass the test is {passingScore}pt!</p>
        </>
    )
};

export {PassedOrFailed};