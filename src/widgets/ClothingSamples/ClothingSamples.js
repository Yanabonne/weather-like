import React from "react";
import "./ClothingSamples.css";
import { weatherGroups } from "../../shared/constants/constants";

function ClothingSamples({weatherGroup}) {
  return (
    <section className="samples">
      <h2 className="samples__title">Пример одежды на сегодня</h2>
      {weatherGroups[`${weatherGroup}`].samples.map(item => (<img key={item} alt="Пример одежды" src={item} className="samples__clothes"></img>))}
      <h2 className="samples__title">Картинки для вдохновения</h2>
      <div className="samples__grid">
        {weatherGroups[`${weatherGroup}`].inspo.map(item => (<img key={item} alt="Картинка для вдохновения" src={item} className="samples__inspo"></img>))}
      </div>
    </section>
  );
}

export default ClothingSamples;