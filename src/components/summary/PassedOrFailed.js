import { useQuiz } from "../../context/quizcontext";

function PassedOrFailed({score}){
    const {passingScore} = useQuiz();
    return "not implemented";
};

export {PassedOrFailed};