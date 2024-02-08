import './Minics.scss';

import Deeplink from '../Deeplink/Deeplink';

function Minics({ socialsData }) {
  return (
    <section className="minics" id="minics">
      <h2 className="minics__title">Миники</h2>
      <ul className="minics__list">
        <li className="minics__list-item">самая популярная тема</li>
        <li className="minics__list-item">букет уже на воде в специальном растворе</li>
        <li className="minics__list-item">в прозрачной удобной сумочке</li>
        <li className="minics__list-item">компактно, минималистично, простоит долго</li>
      </ul>

      <div className="minics__buy">
        <p className="minics__buy-sale-price">2500 &#8381;</p>
        <p className="minics__buy-full-price">3500 &#8381;</p>
        <Deeplink appName="whatsapp" styleType="buy-button" socialsData={socialsData} />
      </div>
    </section>
  );
}

export default Minics;
