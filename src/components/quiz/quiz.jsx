import React ,{useState} from "react";
import Button from "../button";
import questions from "../../questions";
import OptionsBar from "./optionsBar";

function createQuestions(q,quizUpHook){
    return (<>
    <span className="question">{q.id})</span> <p className="question">{q.question}</p><br></br>
    <OptionsBar 
        ans={q.answer}
        options={q.options}
        quizUpHook={quizUpHook}
    />
    </>);
}

function Quiz(props) {
    const [quizUp,setQuizUp]=useState(false);
    return (
        <div className="quizHolder">
            <h1 className="center" style={{marginTop:"2px", marginBottom:"6px"}}>Answer these questions</h1>
            <h2 className="center pushDown" style={{marginTop:"2px"}}>In order to prove your culture</h2>
            {questions.map((q)=>createQuestions(q,quizUp))}
            {quizUp?<Button startQuiz={props.startQuiz} setStartQuiz={props.setStartQuiz} /> : <button className="btn btn-outline-dark center-btn" onClick={()=>setQuizUp(true)}>Check Yo Answers</button>}
        </div>
    )
}

export default Quiz; 






// restart button
/*  */