import Deeplink from '../Deeplink/Deeplink';
import Logo from '../Logo/Logo';
import './Footer.scss';

function Footer({ socialsData }) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Deeplink
          appName="telegram"
          styleType="icon"
          socialsData={socialsData}
        />
        <Deeplink appName="vk" styleType="icon" socialsData={socialsData} />
        <a className="footer__logo-link" href="#app">
          <Logo size="small" />
        </a>
        <Deeplink
          appName="instagram"
          styleType="icon"
          socialsData={socialsData}
        />
        <Deeplink
          appName="whatsapp"
          styleType="icon"
          socialsData={socialsData}
        />
      </div>
    </footer>
  );
}

export default Footer;
