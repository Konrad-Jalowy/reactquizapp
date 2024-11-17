import { useRef, useState, useEffect } from "react";
import LIST from "../../utils/list2";
import './AnswersList.css';
import { SimpleSummary } from "../summary/SimpleSummary";
function AnswersList({idx, shuffle, setNextQuestion, skipQuestion, setTimerBlocked, showCorrect}){

    const answers = useRef(null);

    const correct = useRef(null);

    const chosenAnswerRef = useRef(null);

    const [mode, setMode] = useState(null);
    
    if(correct.current === null){
        correct.current = LIST[idx].correct;
    }

    if(answers.current === null){

        const rawAnswers = LIST[idx].answers;
        const readyAnswers = [...Object.entries(rawAnswers)];

        if(shuffle){
            readyAnswers.sort(() => Math.random() - 0.5);
        }
        answers.current = [...readyAnswers];
    }

    useEffect(() => {
        let timer;
        switch(mode){
            case null:
                break;
            case 'chosen':
                chosenAnswerRef.current.className = 'selectedAnswer';
                if(showCorrect === false){
                    setTimerBlocked(true);
                    timer = setTimeout(() => {
                        setNextQuestion(chosenAnswerRef.current.dataset.idx);
                    },700)
                    break;
                }
                
                setMode('waiting');
                setTimerBlocked(true);
                break;
            case 'waiting':
                timer = setTimeout(() => {
                let cls = chosenAnswerRef.current.dataset.idx === correct.current ? 'correctAnswer' : 'wrongAnswer';
                chosenAnswerRef.current.className = cls;
                setMode('feedbackSent')
                },2000);
                break;
            case 'feedbackSent':
                timer = setTimeout(() => {
                    setNextQuestion(chosenAnswerRef.current.dataset.idx);
                },1000);
                break;
            default:
                break;
        }

        return () => {
            clearTimeout(timer);
          };

    }, [mode, setNextQuestion, setTimerBlocked, showCorrect]);


    function handleClick(e){
        if(chosenAnswerRef.current === null){
            chosenAnswerRef.current = e.target;
            setMode('chosen');
        }
    }
    

    return (
        <> 
            <ul className="answersList">
            {answers.current.map((item) => {
                const [key,value] = item;
               return (
               <li 
               key={key} 
               data-idx={key} 
               onClick={(e) => handleClick(e)}
               className={mode === null ? 'hoverable' : ''}
               >{value}</li>)
            })}
            </ul>
            <div className="answersControls">
            <button 
            disabled={mode !== null}
            onClick={() => skipQuestion()}
            >Skip</button>
            <SimpleSummary idx={idx} />
            </div>
            
        </>
    );
}

export {AnswersList};