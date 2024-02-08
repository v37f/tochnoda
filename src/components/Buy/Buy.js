import './Buy.scss';

import Deeplink from '../Deeplink/Deeplink';
function Buy({ socialsData }) {
  return (
    <section className="buy">
      <p className="buy__sale-price">2500 &#8381;</p>
      <p className="buy__full-price">3500 &#8381;</p>
      <Deeplink appName="whatsapp" styleType="buy-button" socialsData={socialsData} />
    </section>
  );
}

export default Buy;
