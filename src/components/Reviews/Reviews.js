import { useState } from 'react';
import Review from '../Review/Review';
import './Reviews.scss';
import ItemsCarousel from 'react-items-carousel';

function Reviews({ reviewsData }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы покупателей</h2>
      <div className="reviews__carousel">
        <ItemsCarousel
          infiniteLoop={false}
          gutter={12}
          activePosition={'center'}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={1}
          slidesToScroll={1}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter={false}
          requestToChangeActive={(value) => setActiveItemIndex(value)}
          activeItemIndex={activeItemIndex}
          rightChevron={
            <button className="reviews__carousel-button reviews__carousel-button_type_right" />
          }
          leftChevron={
            <button className="reviews__carousel-button reviews__carousel-button_type_left" />
          }
          classes={{
            itemWrapper: 'reviews__carousel-item',
          }}
        >
          {reviewsData.map((data) => (
            <Review data={data} />
          ))}
        </ItemsCarousel>
      </div>
    </section>
  );
}

export default Reviews;
