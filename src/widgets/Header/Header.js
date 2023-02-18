import "./Header.css";
import logo from "../../images/logo.svg";
import MenuPopup from "../MenuPopup/MenuPopup";
import React from "react";

function Header({handleMenuButtonClick, isMenuOpen}) {
  

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
      <img className="header__logo" alt="Лого" src={logo}></img>
    </header>
  );
}

export default Header;
