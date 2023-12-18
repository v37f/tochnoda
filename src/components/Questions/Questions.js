import './Questions.scss';
import Accordion from '../Accordion/Accordion';

function Questions({ questionsData }) {
  return (
    <section className="questions">
      <h2 className="questions__title">Вопросы - ответы</h2>
      <div className="questions__accordion">
        {questionsData?.map(({ id, question, answer }) => (
          <Accordion title={question} content={answer} key={id} />
        ))}
      </div>
    </section>
  );
}

export default Questions;
