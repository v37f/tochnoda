import './Header.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
      <Logo size="big" />
      <nav className="header__navigation">
        <a className="header__navigation-link" href="#about">
          О нас
        </a>
        <a className="header__navigation-link" href="#minics">
          Миники
        </a>
        <a className="header__navigation-link" href="#reviews">
          Отзывы
        </a>
        <a className="header__navigation-link" href="#contacts">
          Контакты
        </a>
      </nav>
    </header>
  );
}

export default Header;
