import "./SelectButtons.css";

function SelectButtons({ isRandom, changeToRandomMode, changeToNormalMode }) {
  return (
    <div className="select">
      <button
        className={`${
          isRandom ? "select__button" : "select__button select__button_active"
        }`}
        onClick={changeToNormalMode}
      >
        По факту
      </button>
      <button
        className={`${
          isRandom ? "select__button select__button_active" : "select__button"
        }`}
        onClick={changeToRandomMode}
      >
        Рандомно
      </button>
    </div>
  );
}

export default SelectButtons;
