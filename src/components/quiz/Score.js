function Score({score}){
    return (
        <p>Score: {score}</p>
    )
};

function ScoreController({score, shouldRender}){
    return (
        <>
        {shouldRender ? <Score score={score} /> : null}
        </>
    )
}

export {Score, ScoreController};