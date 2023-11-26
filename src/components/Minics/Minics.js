import './Minics.scss';
import video_05 from '../../videos/05.mp4';

function Minics() {
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
    </section>
  );
}

export default Minics;
