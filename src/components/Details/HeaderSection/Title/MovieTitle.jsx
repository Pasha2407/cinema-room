import css from './Title.module.css';
import { ratingColor } from 'service/ratingColor';

export const MovieTitle = ({ data }) => {
  const rating = data.vote_average > 0 && data.vote_average.toFixed(1);

  const budget =
    data.budget > 0 &&
    data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const revenue =
    data.revenue > 0 &&
    data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  let hour = data.runtime > 0 && Math.floor(data.runtime / 60);
  let hourString;
  if (hour === 1) hourString = 'година';
  else if (hour > 1) hourString = 'години';
  else {
    hourString = '';
    hour = '';
  }
  const minute = data.runtime && data.runtime % 60;

  return (
    <div className={css.Title}>
      {data.title && <h1>{data.title}</h1>}

      <h2>
        <span>Оцінка корисутвачів: </span>
        {rating ? (
          <span className={css.Rating} style={ratingColor(rating)}>
            {rating}
          </span>
        ) : (
          <i>невідома</i>
        )}
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
            <b key={item.name}>{item.name}</b>
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
            <b key={item.name}>{item.name}</b>
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

      {data.runtime > 0 && (
        <h2>
          <span>Тривалість: </span>
          {hour} {hourString} {minute} хв
        </h2>
      )}
    </div>
  );
};
