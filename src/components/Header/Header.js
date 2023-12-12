import './Header.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="header__navigation">
        <a className="header__link" href="#about">
          О нас
        </a>
        <a className="header__link" href="#minics">
          Миники
        </a>
        <a className="header__link" href="#reviews">
          Отзывы
        </a>
        <a className="header__link" href="#">
          Контакты
        </a>
      </nav>
    </header>
  );
}

export default Header;
