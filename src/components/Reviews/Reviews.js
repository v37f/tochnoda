import Review from '../Review/Review';
import './Reviews.scss';

function Reviews({ reviewsData }) {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы покупателей</h2>
      <ul className="reviews__list">
        {reviewsData.map((data) => (
          <Review data={data} />
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
