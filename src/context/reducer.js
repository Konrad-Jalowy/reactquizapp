function quizContextReducer(state, action){
    switch (action.type) {
        case 'toggleTimedQuestions': {
          return {
            ...state, 
            timedQuestions: !state.timedQuestions
          };
        }

        case 'toggleShuffleAnswers': {
            return {
              ...state, 
              shuffleAnswers: !state.shuffleAnswers
            };
          }

          case 'toggleShowScore': {
            return {
              ...state, 
              showScore: !state.showScore
            };
          }

          case 'toggleShowCorrect': {
            return {
              ...state, 
              showCorrect: !state.showCorrect
            };
          }
          case 'questionTimeChange': {
            return {
              ...state, 
              timePerQuestion: action.payload
            };
          }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
    }

export default quizContextReducer;