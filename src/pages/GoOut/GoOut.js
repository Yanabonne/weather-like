import React from "react";
import "./GoOut.css";
import SelectButtons from "../../widgets/SelectButtons/SelectButtons.js";
import Clothes from "../../widgets/Clothes/Clothes.js";
import Weather from "../../widgets/Weather/Weather";
import { getWeatherByCity } from "../../shared/Api/Api.js";

function GoOut() {
  const [isRandom, setIsRandom] = React.useState(false);
  const [isRecommendationGoOutOpen, setIsRecommendationGoOutOpen] =
    React.useState(false);
  const [isGoOut, setIsGoOut] = React.useState(false);
  const [weatherData, setWeatherData] = React.useState({});

  function changeToNormalMode() {
    setIsRandom(false);
    setIsRecommendationGoOutOpen(false);
  }

  function changeToRandomMode() {
    setIsRandom(true);
    setIsRecommendationGoOutOpen(false);
  }

  function handleGoOutResult(data, wb) {
    let temp = data.main.temp;

    if (wb === "cold") {
      temp -= 3;
    } else if (wb === "hot") {
      temp += 3;
    }

    if (temp > 28 || temp < -24 || data.main.pressure > 1038 || data.main.pressure < 988 || data.wind.speed > 10 || data.main.humidity > 92) {
        setIsGoOut(false);
    } else {
        setIsGoOut(true);
    }
  }

  function handleRecommendationGoOutButtonClick(city, wb) {
    getWeatherByCity(city)
      .then((res) => {
        setWeatherData(res);
        handleGoOutResult(res, wb);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRecommendationGoOutOpen(true);
      });
  }

  return (
    <div className="go-out">
      <SelectButtons
        isRandom={isRandom}
        changeToNormalMode={changeToNormalMode}
        changeToRandomMode={changeToRandomMode}
      />
      {!isRandom && (
        <Clothes onButtonClick={handleRecommendationGoOutButtonClick} />
      )}
      {isRecommendationGoOutOpen && (
        <Weather
          weatherData={weatherData}
          isUmbrella={false}
          isPressure={true}
        />
      )}
      {isRecommendationGoOutOpen && (
        <h2 className="go-out__result">
          {isGoOut
            ? "Выходить на улицу можно"
            : "Выходить на улицу не рекомендую"}
        </h2>
      )}
    </div>
  );
}

export default GoOut;
