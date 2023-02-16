import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
        <button type='button' className='header__burger'></button>
        <img className='header__logo' alt='Лого' src={logo}></img>
    </header>
  );
}

export default Header;