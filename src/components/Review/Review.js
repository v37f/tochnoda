import './Review.scss';

function Review({ data }) {
  const getStarElements = (stars) => {
    let starElements = [];
    for (let i = 0; i < stars; i++) {
      starElements.push(<li className="review__star" key={i} />);
    }
    return starElements;
  };

  return (
    <li className="review">
      <div className="review__user">
        <img className="review__user-avatar" src={data.user.avatar} alt="" />
        <h3 className="review__user-name">{data.user.name}</h3>
      </div>
      <div className="review__info">
        <ul className="review__stars">{getStarElements(data.stars)}</ul>
        <p className="review__date">{data.date}</p>
      </div>
      <p className="review__text">{data.text}</p>
    </li>
  );
}

export default Review;
