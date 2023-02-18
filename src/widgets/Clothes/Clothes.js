import "./Clothes.css";

function Clothes() {
  return (
    <section className="clothes">
      <h1 className="clothes__title">Расскажите о себе</h1>
      <p className="clothes__text">Я нахожусь в городе:</p>
      <select className="clothes__option">
        <option>Екатеринбург</option>
        <option>Москва</option>
        <option>Санкт-Петербург</option>
      </select>
      <p className="clothes__text">Выберите факт о себе:</p>
      <select className="clothes__option">
        <option>Я всегда мёрзну</option>
        <option>Мне всегда комфортно</option>
        <option>Мне всегда жарко</option>
      </select>
      <button type="button" className="clothes__button">Посмотреть рекомендацию!</button>
    </section>
  );
}

export default Clothes;
