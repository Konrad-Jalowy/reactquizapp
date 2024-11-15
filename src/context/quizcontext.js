import initialState from "./initialState";
import quizContextReducer from "./reducer";
import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext(null);

const QuizDispatchContext = createContext(null);

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizContextReducer, initialState);
  
    return (
      <QuizContext.Provider value={state}>
        <QuizDispatchContext.Provider value={dispatch}>
          {children}
        </QuizDispatchContext.Provider>
      </QuizContext.Provider>
    );
  }

  export function useQuiz() {
    return useContext(QuizContext);
  }
  
  export function useQuizDispatch() {
    return useContext(QuizDispatchContext);
  }

  export function useQuizWithDispatch(){
    return [useContext(QuizContext), useContext(QuizDispatchContext) ];
  }