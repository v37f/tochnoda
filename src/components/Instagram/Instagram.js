import Deeplink from '../Deeplink/Deeplink';
import './Instagram.scss';

function Instagram({ socialsData }) {
  return (
    <section className="instagram">
      <h2 className="instagram__title">
        Сотни современных букетов от 1 500 до 50 000 ₽
      </h2>
      <ul className="instagram__list">
        <li className="instagram__list-item">
          в нашем Instagram
          <Deeplink
            appName="instagram"
            styleType="animated-button"
            socialsData={socialsData}
          >
            @{socialsData.instagram}
          </Deeplink>
        </li>
        <li className="instagram__list-item">пришлем фото перед отправкой</li>
        <li className="instagram__list-item">
          подпишем открытку каллиграфическим почерком
        </li>
      </ul>
    </section>
  );
}

export default Instagram;
