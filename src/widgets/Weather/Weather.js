import React from "react";
import "./Weather.css";

function Weather({ weatherData, isUmbrellaNeeded, isUmbrella, isPressure }) {
  const [background, setBackground] = React.useState("");

  React.useEffect(() => {
    if (weatherData.main.temp < 0) {
      setBackground("weather__background weather__background_snow");
    } else if (weatherData.clouds.all > 65) {
      setBackground("weather__background weather__background_cloud");
    } else if (weatherData.clouds.all < 15) {
      setBackground("weather__background weather__background_sun");
    } else {
      setBackground("weather__background");
    }
  }, [])

  return (
    <section className="weather">
      <div className={background}></div>
      <h2 className="weather__title">Сводка погоды</h2>
      <div className="weather__two-columns">
        <div className="weather__column">
          <span className="weather__span">
            {weatherData.weather[0].description.slice(0, 1).toUpperCase() +
              weatherData.weather[0].description.slice(1)}
          </span>
          <p className="weather__info">
            Температура воздуха{" "}
            <span className="weather__span">
              {Math.round(weatherData.main.temp)}
            </span>
          </p>
          <p className="weather__info">
            Ощущается как{" "}
            <span className="weather__span">
              {Math.round(weatherData.main.feels_like)}
            </span>
          </p>
        </div>
        <div className="weather__column">
          <p className="weather__info">
            Влажность{" "}
            <span className="weather__span">
              {Math.round(weatherData.main.humidity)} %
            </span>
          </p>
          <p className="weather__info">
            Скорость ветра{" "}
            <span className="weather__span">
              {Math.round(weatherData.wind.speed)} м/с
            </span>
          </p>
          {isUmbrella && (
            <p className="weather__info">
              Зонт:{" "}
              <span className="weather__span">
                {isUmbrellaNeeded ? "нужен" : "не нужен"}
              </span>
            </p>
          )}
          {isPressure && (
            <p className="weather__info">
              Давление{" "}
              <span className="weather__span">
                {weatherData.main.pressure} гПа
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Weather;
