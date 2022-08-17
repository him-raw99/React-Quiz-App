import React, { useState } from "react";

function OptionsBar(props) {
  const [selected, setSelected] = useState(4);
  function handelClick(n) {
    setSelected(n);
  }

  function optionStyling(index) {
    if (props.quizUpHook) {
      if (selected === props.ans && selected === index) {
        return { backgroundColor: "blue" }; //if selected answer is correct
      } else if (selected === index) {
        return { backgroundColor: "red" }; //if selected answer is incorrect
      } else if (index === props.ans) {
        return { backgroundColor: "yellow" }; //marking the right answer
      }
    }
  }

  return (
    <div>
      <div
        className={selected === 0 ? "option selected" : "option"}
        onClick={!props.quizUpHook ? () => handelClick(0) : null}
        style={optionStyling(0)}
      >
        {props.options[0]}
      </div>
      <div
        className={selected === 1 ? "option selected" : "option"}
        onClick={!props.quizUpHook ? () => handelClick(1) : null}
        style={optionStyling(1)}
      >
        {props.options[1]}
      </div>
      <div
        className={selected === 2 ? "option selected" : "option"}
        onClick={!props.quizUpHook ? () => handelClick(2) : null}
        style={optionStyling(2)}
      >
        {props.options[2]}
      </div>
      <div
        className={selected === 3 ? "option selected" : "option"}
        onClick={!props.quizUpHook ? () => handelClick(3) : null}
        style={optionStyling(3)}
      >
        {props.options[3]}
      </div>
    </div>
  );
}

export default OptionsBar;
