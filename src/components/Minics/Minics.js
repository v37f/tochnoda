import './Minics.scss';
import VideoGrid from '../VideoGrid/VideoGrid';
import Deeplink from '../Deeplink/Deeplink';

function Minics({ videosData, socialsData }) {
  return (
    <section className="minics">
      <h2 className="minics__title">Миники</h2>
      <ul className="minics__list">
        <li className="minics__list-item">самая популярная тема</li>
        <li className="minics__list-item">
          букет уже на воде в специальном растворе
        </li>
        <li className="minics__list-item">в прозрачной удобной сумочке</li>
        <li className="minics__list-item">
          компактно, минималистично, простоит долго
        </li>
      </ul>
      <VideoGrid videosData={videosData} />
      <div className="minics__buy">
        <p className="minics__sale-price">2500 &#8381;</p>
        <p className="minics__full-price">3500 &#8381;</p>
        <Deeplink id="whatsapp" styleType="custom" socialsData={socialsData} />
      </div>
    </section>
  );
}

export default Minics;
