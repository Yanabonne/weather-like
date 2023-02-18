import "./OutfitRecommendations.css";
import Clothes from "../../widgets/Clothes/Clothes";
import Weather from "../../widgets/Weather/Weather";

function OutfitRecommendations() {
  return (
    <div className="outfit">
    <Clothes />
    <Weather />
    </div>
  );
}

export default OutfitRecommendations;