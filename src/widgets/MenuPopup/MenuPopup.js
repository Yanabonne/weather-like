import "./MenuPopup.css";
import { NavLink } from 'react-router-dom';

function MenuPopup({isOpen}) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <nav className={`${isOpen ? "menu popup" : "menu popup menu_closed"}`}>
      <NavLink to="/weather-like/pogodka" className="menu__link" onClick={scrollToTop}>
      О проекте
      </NavLink>
      <NavLink to="/weather-like/how-to-dress" className="menu__link" onClick={scrollToTop}>
      Как одеться по погоде?
      </NavLink>
      <NavLink to="/weather-like/go-out" className="menu__link" onClick={scrollToTop}>
      Выйти ли мне на улицу?
      </NavLink>
    </nav>
  );
}

export default MenuPopup;
