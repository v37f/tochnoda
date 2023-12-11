import './Questions.scss';
import Accordion from '../Accordion/Accordion';

function Questions({ questionsData }) {
  return (
    <section className="questions">
      <h2 className="questions__title">Вопросы - ответы</h2>
      <div className="questions__accordion">
        {questionsData?.map(({ question, answer }) => (
          <Accordion title={question} content={answer} />
        ))}
      </div>
    </section>
  );
}

export default Questions;
