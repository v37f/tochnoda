import './Clients.scss';

function Clients({ clientsData }) {
  return (
    <section className="clients">
      <h2 className="clients__title">Наши клиенты</h2>
      <ul className="clients__list">
        {clientsData.map((client) => (
          <img
            className="clients__list-item"
            src={client.logo}
            alt={client.title}
          />
        ))}
      </ul>
    </section>
  );
}

export default Clients;
