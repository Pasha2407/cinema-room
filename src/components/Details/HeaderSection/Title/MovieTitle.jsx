import css from './Title.module.css';

export const MovieTitle = ({ data }) => {
  const rating = Math.round(data.vote_average * 10);

  const budget =
    data.budget !== 0 &&
    data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const revenue =
    data.budget !== 0 &&
    data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const hour = data.runtime && Math.floor(data.runtime / 60);
  let hourString;
  if (hour === 1) hourString = 'година';
  else if (hour > 1) hourString = 'години';
  else hourString = 'годин';
  const minute = data.runtime && data.runtime % 60;

  return (
    <div className={css.Title}>
      {data.title && <h1>{data.title}</h1>}

      <h2>
        <span>Оцінка корисутвачів: </span>
        {rating ? `${rating}%` : <i>невідома</i>}
      </h2>

      <h2>
        <span>Рік: </span>
        {data.release_date.slice(0, 4)}
      </h2>

      <h2>
        <span>Жанр</span>
      </h2>
      {data.genres.length > 0 ? (
        <section>
          {data.genres?.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
        </section>
      ) : (
        <i>невідомий</i>
      )}

      <h2>
        <span>Країна</span>
      </h2>
      {data.production_countries.length > 0 ? (
        <section>
          {data.production_countries?.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
        </section>
      ) : (
        <i>невідома</i>
      )}

      <h2>
        <span>Бюджет: </span>
        {budget ? `${budget} $` : <i>невідомий</i>}
      </h2>

      <h2>
        <span>Дохід: </span>
        {revenue ? `${revenue} $` : <i>невідомий</i>}
      </h2>

      {data.tagline && (
        <h2>
          <span>Слоган: </span>
          {data.tagline}
        </h2>
      )}

      {data.runtime && (
        <h2>
          <span>Тривалість: </span>
          {hour} {hourString} {minute} хв
        </h2>
      )}
    </div>
  );
};
