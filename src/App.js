import { useState } from 'react';
import { QuizProvider } from './context/quizcontext';
import { Form } from './components/form/Form';
import { Quiz } from './components/quiz/Quiz';
import './App.css';

function App() {
   
  const [mode, setMode] = useState('menu');

  return (
    <div className="App container">
      <QuizProvider>
      {mode === 'menu' ? <Form setMode={setMode}/> : null}
      {mode === 'quiz' ? <Quiz/> : null}
      </QuizProvider>
    </div>
  );
}

export default App;