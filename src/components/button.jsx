import React from "react";

function Button(props) {
    function quizDriver() {
        props.setStartQuiz(!props.startQuiz);
    }
    return (
        <button onClick={quizDriver} className="btn btn-outline-dark center-btn">{props.startQuiz ? "Restart" : "Play"}</button>
    )
}

export default Button; 