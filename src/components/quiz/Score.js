function Score({score}){
    return (
        <div className="score">
            <p>Score: {score}</p>
        </div>
        
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