import LIST from "./list2";
function prepareAnswer(idx, answer){

    let questionNumber = idx;
    let chosenAnswer = answer;
    let isCorrect = LIST[idx].correct === answer;

    return {questionNumber, chosenAnswer, isCorrect, isSkipped: false};
};

export default prepareAnswer;