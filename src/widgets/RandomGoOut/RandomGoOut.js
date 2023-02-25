import React from "react";
import "./RandomGoOut.css";
import { randomAnswers } from "../../shared/constants/constants";

function RandomGoOut() {
  const [isRaindropSeen, setIsRaindropSeen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState('Выходить ли мне на улицу?');

  function getRandomAnswer() {
    setButtonText(randomAnswers[Math.floor(Math.random() * randomAnswers.length)]);
    setIsRaindropSeen(false);
  }

  function onButtonClick(e) {
    if (!e.target.classList.contains("random__raindrop")) {
        setButtonText('');
        setIsRaindropSeen(true);
        setTimeout(getRandomAnswer, 2000);
    }
  }

  return (
    <button
      className={`${isRaindropSeen ? "random random_raindrop" : "random"}`}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );
}

export default RandomGoOut;
