import React from "react";
import Button from "../button";
function Home(props) {
    return (
        <div className="homepage-contentbox">
            <h1 className="center ">Wanna test your otakuness??</h1>
            <h3 className="center">start the quiz</h3>
            <Button
                startQuiz={props.startQuiz}
                setStartQuiz={props.setStartQuiz}
            />
        </div>
    )
}

export default Home; 