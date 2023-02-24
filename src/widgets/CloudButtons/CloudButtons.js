import { useNavigate } from "react-router-dom";
import CloudButton from "../../shared/CloudButton/CloudButton";
import "./CloudButtons.css";

function CloudButtons() {
  const navigate = useNavigate(); 

  function navigateToClothes() {
    navigate('/how-to-dress')
  }

  function navigateToGoOut() {
    navigate('/go-out')
  }

  return (
    <section className="cloud-buttons">
      <h2 className="cloud-buttons__title">Что бы вы хотели узнать?</h2>
      <div className="cloud-buttons__clouds">
        <CloudButton onClick={navigateToClothes}>Что мне сегодня надеть?</CloudButton>
        <CloudButton onClick={navigateToGoOut}>Выходить ли мне на улицу?</CloudButton>
      </div>
    </section>
  );
}

export default CloudButtons;
