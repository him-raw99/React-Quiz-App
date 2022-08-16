import React, { useState } from "react";

function OptionsBar(props) {
    const [selected,setSelected]=useState(4);
    function handelClick(n){
        setSelected(n);
    }
    return (
        <div>
            <div className={selected===0 ? "option selected" : "option"} onClick={!props.quizUpHook?()=>handelClick(0):null} style={props.quizUpHook ? ((selected===props.ans && selected===0)?{backgroundColor:"blue"}:(selected===0||selected===4?{backgroundColor:"red"}:null)):null}>{props.options[0]}</div>
            <div className={selected===1 ? "option selected" : "option"} onClick={!props.quizUpHook?()=>handelClick(1):null} style={props.quizUpHook ? ((selected===props.ans && selected===1)?{backgroundColor:"blue"}:(selected===1||selected===4?{backgroundColor:"red"}:null)):null}>{props.options[1]}</div>
            <div className={selected===2 ? "option selected" : "option"} onClick={!props.quizUpHook?()=>handelClick(2):null} style={props.quizUpHook ? ((selected===props.ans && selected===2)?{backgroundColor:"blue"}:(selected===2||selected===4?{backgroundColor:"red"}:null)):null}>{props.options[2]}</div>
            <div className={selected===3 ? "option selected" : "option"} onClick={!props.quizUpHook?()=>handelClick(3):null} style={props.quizUpHook ? ((selected===props.ans && selected===3)?{backgroundColor:"blue"}:(selected===3||selected===4?{backgroundColor:"red"}:null)):null}>{props.options[3]}</div>
        </div>
    )
    
}

export default OptionsBar; 