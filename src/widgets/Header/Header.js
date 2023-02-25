import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import MenuPopup from "../MenuPopup/MenuPopup";
import React from "react";

function Header({handleMenuButtonClick, isMenuOpen}) {
  const navigate = useNavigate(); 
  
  function navigateToMainPage() {
    navigate('/weather-like/pogodka');
  }

  return (
    <header className="header">
      <MenuPopup isOpen={isMenuOpen} />
      <button
        type="button"
        className={`${
          isMenuOpen ? "header__burger header__burger_active" : "header__burger"
        }`}
        onClick={handleMenuButtonClick}
      ></button>
      <img className="header__logo" alt="Лого" src={logo} onClick={navigateToMainPage} ></img>
    </header>
  );
}

export default Header;
