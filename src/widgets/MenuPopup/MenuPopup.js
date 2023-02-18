import "./MenuPopup.css";
import { NavLink } from 'react-router-dom';

function MenuPopup({isOpen}) {
  return (
    <nav className={`${isOpen ? "menu popup" : "menu popup menu_closed"}`}>
      <NavLink to="/pogodka" className="menu__link">
      О проекте
      </NavLink>
      <NavLink to="/how-to-dress" className="menu__link">
      Как одеться по погоде?
      </NavLink>
      <NavLink to="/leave-the-room" className="menu__link">
      Выйти ли мне на улицу?
      </NavLink>
    </nav>
  );
}

export default MenuPopup;
