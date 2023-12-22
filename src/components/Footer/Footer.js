import Deeplink from '../Deeplink/Deeplink';
import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer({ socialsData }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Deeplink id="telegram" styleType="icon" socialsData={socialsData} />
        <Deeplink id="facebook" styleType="icon" socialsData={socialsData} />
        <a className="footer__logo-link" href="#app">
          <Logo size="small" />
        </a>
        <Deeplink id="instagram" styleType="icon" socialsData={socialsData} />
        <Deeplink id="whatsapp" styleType="icon" socialsData={socialsData} />
      </div>
    </footer>
  );
}

export default Footer;
