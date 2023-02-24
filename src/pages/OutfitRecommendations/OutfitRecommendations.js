import React from "react";

import "./OutfitRecommendations.css";
import Clothes from "../../widgets/Clothes/Clothes";
import Weather from "../../widgets/Weather/Weather";
import ClothingSamples from "../../widgets/ClothingSamples/ClothingSamples";
import { getWeatherByCity } from "../../shared/Api/Api.js";

function OutfitRecommendations() {
  const [weatherData, setWeatherData] = React.useState({});
  const [isUmbrellaNeeded, setIsUmbrellaNeeded] = React.useState(false);
  const [isRecommendationOpen, setIsRecommendationOpen] = React.useState(false);
  const [weatherGroup, setWeatherGroup] = React.useState('');

    function defineGroup(data, wb) {
        let temp = data.main.temp;

        if (wb === "cold") {
            temp -= 3
        } else if (wb === "hot") {
            temp += 3
        }

        if (temp > 24) {
            setWeatherGroup("plus24")
        } else if (temp > 19) {
            setWeatherGroup("plus19_24")
        } else if (temp > 13) {
            setWeatherGroup("plus13_19")
        } else if (temp > 8) {
            setWeatherGroup("plus8_13")
        } else if (temp > 0) {
            setWeatherGroup("plus0_8")
        } else if (temp > -10) {
            setWeatherGroup("minus10_0")
        } else if (temp > -20) {
            setWeatherGroup("minus20_10")
        } else if (temp > -30) {
            setWeatherGroup("minus30_20")
        } else {
            setWeatherGroup("minus30")
        }
    }

  function handleRecommendationButtonClick(city, wb) {
    getWeatherByCity(city)
      .then((res) => {
        setWeatherData(res);
        if (res.main.temp > 0 && res.main.humidity > 40) {
          setIsUmbrellaNeeded(true);
        }
        defineGroup(res, wb);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRecommendationOpen(true);
      })
  }

  return (
    <div className="outfit">
      <Clothes onButtonClick={handleRecommendationButtonClick}/>
      {isRecommendationOpen && <Weather weatherData={weatherData} isUmbrella={true} isPressure={false} isUmbrellaNeeded={isUmbrellaNeeded} />}
      {isRecommendationOpen && <ClothingSamples weatherGroup={weatherGroup} />}
    </div>
  );
}

export default OutfitRecommendations;
