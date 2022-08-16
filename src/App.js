import React, { useState } from "react";
import Home from "./components/homepage/home"
import Quiz from "./components/quiz/quiz";
function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="App">
      {startQuiz ?
        <Quiz
          startQuiz={startQuiz}
          setStartQuiz={setStartQuiz}
        /> :
        <Home
          startQuiz={startQuiz}
          setStartQuiz={setStartQuiz}
        />}
    </div>
  );
}

export default App;
