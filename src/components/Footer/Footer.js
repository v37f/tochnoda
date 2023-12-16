import Deeplink from '../Deeplink/Deeplink';
import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer({ socialsData }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Deeplink id="telegram" styleType="icon" socialsData={socialsData} />
          <Deeplink id="facebook" styleType="icon" socialsData={socialsData} />
        </div>
        <Logo size="small" />
        <div className="footer__links">
          <Deeplink id="instagram" styleType="icon" socialsData={socialsData} />
          <Deeplink id="whatsapp" styleType="icon" socialsData={socialsData} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
