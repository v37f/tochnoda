import './Contacts.scss';
import { formatPhoneNumber, getMobileOperatingSystem } from '../../utils/utils';
import {
  DESKTOP_NAVIGATOR_LINK,
  MOBILE_NAVIGATOR_LINK,
} from '../../utils/constants';

function Contacts({ socialsData }) {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__map">
        <iframe
          className="contacts__map-frame"
          title="Местоположение магазина"
          allow="geolocation"
          src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.637110%2C55.793227&mode=search&oid=32160377050&ol=biz&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=17"
        ></iframe>
      </div>
      <div className="contacts__store-info">
        <a
          className="contacts__navigator-link"
          href={
            getMobileOperatingSystem() === 'desktop'
              ? DESKTOP_NAVIGATOR_LINK
              : MOBILE_NAVIGATOR_LINK
          }
          rel="noreferrer"
          target="_blank"
        >
          Построить маршрут в навигаторе
        </a>
        <p className="contacts__address">Москва, Мира проспект, дом 88/1</p>
        <p className="contacts__opening-hours">Часы работы: с 07:00 до 17:00</p>
        <p className="contacts__phone">
          {formatPhoneNumber(socialsData.phone)}
        </p>
      </div>
      <div className="contacts__path">
        <h3 className="contacts__path-heading">Как добраться:</h3>
        <ul className="contacts__path-list">
          <li className="contacts__path-list-item">
            м. Рижская - выйти из метро и повернуть налево, затем через 20
            метров повернуть еще раз налево и вы увидите рынок перед собой
          </li>
          <li className="contacts__path-list-item">
            На машине - заезд на платную парковку со стороны третьего кольца под
            мостом, цена парковки - 150р./час.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacts;
