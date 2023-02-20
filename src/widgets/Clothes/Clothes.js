import "./Clothes.css";
import React from "react";

function Clothes({onButtonClick}) {
  const cityRef = React.useRef();
  const wellbeingRef = React.useRef();

  function handleButtonClick() {
    onButtonClick(cityRef.current.value, wellbeingRef.current.value);
  }

  return (
    <section className="clothes">
      <h1 className="clothes__title">Расскажите о себе</h1>
      <p className="clothes__text">Я нахожусь в городе:</p>
      <select className="clothes__option" ref={cityRef}>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
      </select>
      <p className="clothes__text">Выберите факт о себе:</p>
      <select className="clothes__option" ref={wellbeingRef}>
        <option value="cold">Я всегда мёрзну</option>
        <option value="neutral">Мне всегда комфортно</option>
        <option value="hot">Мне всегда жарко</option>
      </select>
      <button type="button" className="clothes__button" onClick={handleButtonClick}>Посмотреть рекомендацию!</button>
    </section>
  );
}

export default Clothes;
