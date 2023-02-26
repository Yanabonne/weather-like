import React from "react";
import "./RandomGoOut.css";
import { randomAnswers } from "../../shared/constants/constants";

function RandomGoOut() {
  const [isTextSeen, setIsTextSeen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Выходить ли мне на улицу?');

  function getRandomAnswer() {
    setButtonText(randomAnswers[Math.floor(Math.random() * randomAnswers.length)]);
    setIsTextSeen(false);
  }

  function onButtonClick(e) {
    if (!e.target.classList.contains("random__no-text")) {
        setIsTextSeen(true);
        setTimeout(getRandomAnswer, 1000);
    }
  }

  return (
    <button
      className={`${isTextSeen ? "random random_no-text" : "random"}`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}

export default RandomGoOut;
