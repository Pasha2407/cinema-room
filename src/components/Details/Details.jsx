import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoMdArrowRoundBack } from 'react-icons/io';

import css from './Details.module.css';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';

export const Details = ({ data, back, id, availableId }) => {
  const budget =
    data.budget && data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const revenue =
    data.revenue &&
    data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  const hour = data.runtime && Math.floor(data.runtime / 60);
  let hourString;
  if (hour === 1) hourString = 'година';
  else hourString = 'години';
  const minute = data.runtime && data.runtime % 60;

  return (
    <div
      className={css.Background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
      }}
    >
      <div className={css.BackgroundFilter}>
        <div className={css.Wrapper}>
          <Link to={back.current}>
            <IconContext.Provider value={{ color: '#be4040', size: 30 }}>
              <IoMdArrowRoundBack />
            </IconContext.Provider>
            Назад
          </Link>
          <div className={css.Container}>
            <aside
              style={{
                backgroundImage: data.poster_path
                  ? `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
                  : `url(${require(`data/images/noimage.jpg`)})`,
              }}
            ></aside>
            <div className={css.Title}>
              {data.title && <h1>{data.title}</h1>}
              {data.name && <h1>{data.name}</h1>}

              {data.vote_average && (
                <h3>
                  <span>Оцінка корисутвачів: </span>
                  {Math.round(data.vote_average * 10)}%
                </h3>
              )}

              {data.release_date && (
                <h3>
                  <span>Рік: </span>
                  {data.release_date.slice(0, 4)}
                </h3>
              )}
              {data.first_air_date && data.last_air_date && (
                <h3>
                  <span>Рік: </span>
                  {data.first_air_date.slice(0, 4)} —{' '}
                  {data.last_air_date.slice(0, 4)}
                </h3>
              )}

              <h4>
                <span>Жанр</span>
              </h4>
              {data.genres.length > 0 ? (
                <section className={css.BackgP}>
                  {data.genres?.map(item => (
                    <span key={item.id}>{item.name}</span>
                  ))}
                </section>
              ) : (
                <i>Жанр невідомий</i>
              )}

              <h4>
                <span>Країна</span>
              </h4>
              {data.production_countries.length > 0 ? (
                <section className={css.BackgP}>
                  {data.production_countries?.map(item => (
                    <span key={item.id}>{item.name}</span>
                  ))}
                </section>
              ) : (
                <i>Країна невідома</i>
              )}

              {data.budget && (
                <h3>
                  <span>Бюджет: </span>
                  {budget} $
                </h3>
              )}

              {data.revenue && (
                <h3>
                  <span>Дохід: </span>
                  {revenue} $
                </h3>
              )}

              {data.tagline && (
                <h3>
                  <span>Слоган: </span>
                  {data.tagline}
                </h3>
              )}

              {data.runtime && (
                <h3>
                  <span>Тривалість: </span>
                  {hour} {hourString} {minute} хв
                </h3>
              )}

              {data.number_of_seasons && (
                <h3>
                  <span>Кількість сезонів: </span>
                  {data.number_of_seasons}
                </h3>
              )}

              {data.number_of_episodes && (
                <h3>
                  <span>Кількість серій: </span>
                  {data.number_of_episodes}
                </h3>
              )}
            </div>
          </div>
          <h3>Компанія</h3>
          {data.production_companies.length > 0 && (
            <section className={css.Companies}>
              {data.production_companies?.map(item => (
                <article key={item.id}>
                  {item.logo_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                      alt=""
                    ></img>
                  ) : (
                    <div>
                      <p>{item.name}</p>
                    </div>
                  )}
                </article>
              ))}
            </section>
          )}
          {data.production_companies.length === 0 && <i>No companies found</i>}
          <h3>Опис</h3>
          {data.overview.length > 0 ? (
            <p> {data.overview}</p>
          ) : (
            <i>No overview found</i>
          )}
          {availableId.toString().includes(id) ? (
            <VideoPlayer id={id} />
          ) : (
            <i>Фільму не має</i>
          )}
          <div className={css.LinkButton}>
            <h3>Additional information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Suspense
            fallback={
              <p style={{ paddingLeft: 30 }}>
                <i>Loading...</i>
              </p>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
