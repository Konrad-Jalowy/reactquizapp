function PercentSummary({answers, score}){

    let max = answers.length

    let correct = [...answers].filter((answer) => answer.isCorrect === true ).length;
    let correctPercent = Math.round((correct / max) * 100);

    let wrong = [...answers].filter((answer) => answer.isCorrect === false ).length;
    let wrongPercent = Math.round((wrong / max) * 100)

    let skipped = [...answers].filter((answer) => answer.isSkipped === true ).length;
    let skippedPercent = Math.round((skipped / max) * 100)
   
    return (
        <>
        <div className="percentSummary">
            <p>Score: {score}pt / {max}pt</p>
            <p className="correct">Correct: {correct} / {max} ({correctPercent}%)</p>
            <p className="wrong">Wrong: {wrong} / {max} ({wrongPercent}%)</p>
            <p className="skipped">Skipped: {skipped} / {max} ({skippedPercent}%)</p>
        </div>
        </>
    )
};

export {PercentSummary}