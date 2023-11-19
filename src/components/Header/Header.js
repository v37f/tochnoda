import './Header.scss';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="header__navigation">
        <a className="header__link" href="#">
          О нас
        </a>
        <a className="header__link" href="#">
          Миники
        </a>
        <a className="header__link" href="#">
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
