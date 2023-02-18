import "./Weather.css";

function Weather({ weatherData }) {
  return (
    <section className="weather">
      <div className="weather__background"></div>
      <h2 className="weather__title">Сводка погоды</h2>
      <div className="weather__two-columns">
        <div className="weather__column">
          <span className="weather__span">Пасмурно</span>
          <p className="weather__info">
            Температура воздуха <span className="weather__span">23</span>
          </p>
        </div>
        <div className="weather__column">
          <p className="weather__info">
            Вероятность дождя <span className="weather__span">23</span>
          </p>
          <p className="weather__info">
            Скорость ветра <span className="weather__span">23</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Weather;
