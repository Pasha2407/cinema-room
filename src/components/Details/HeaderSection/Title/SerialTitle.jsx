import css from './Title.module.css';
import { ratingColor } from 'service/ratingColor';

export const SerialTitle = ({ data }) => {
  const rating = data.vote_average > 0 && data.vote_average.toFixed(1);

  const firstDate = data.first_air_date && data.first_air_date.slice(0, 4);
  const lastDate = data.last_air_date && data.last_air_date.slice(0, 4);

  return (
    <div className={css.Title}>
      {data.name && <h1>{data.name}</h1>}

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
        {firstDate === lastDate ? firstDate : `${firstDate} — ${lastDate}`}
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

      {data.tagline && (
        <h2>
          <span>Слоган: </span>
          {data.tagline}
        </h2>
      )}

      <h2>
        <span>Кількість сезонів: </span>
        {data.number_of_seasons ? data.number_of_seasons : <i>невідомо</i>}
      </h2>

      <h2>
        <span>Кількість серій: </span>
        {data.number_of_episodes ? data.number_of_episodes : <i>невідомо</i>}
      </h2>
    </div>
  );
};
