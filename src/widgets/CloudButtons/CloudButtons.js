import CloudButton from "../../shared/CloudButton/CloudButton";
import "./CloudButtons.css";

function CloudButtons() {
  return (
    <section className="cloud-buttons">
      <h2 className="cloud-buttons__title">Что бы вы хотели узнать?</h2>
      <div className="cloud-buttons__clouds">
        <CloudButton>Что мне сегодня надеть?</CloudButton>
        <CloudButton>Выходить ли мне на улицу?</CloudButton>
      </div>
    </section>
  );
}

export default CloudButtons;
