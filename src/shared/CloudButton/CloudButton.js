import "./CloudButton.css";

function CloudButton(props) {  
  return (
    <button type="button" className="cloud-button__cloud">{props.children}</button>
  );
}

export default CloudButton;