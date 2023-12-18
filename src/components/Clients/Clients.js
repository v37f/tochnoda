import './Clients.scss';

function Clients({ clientsData }) {
  return (
    <section className="clients">
      <h2 className="clients__title">Наши клиенты</h2>
      <ul className="clients__list">
        {clientsData.map(({ id, logo, title }) => (
          <img className="clients__list-item" src={logo} alt={title} key={id} />
        ))}
      </ul>
    </section>
  );
}

export default Clients;
