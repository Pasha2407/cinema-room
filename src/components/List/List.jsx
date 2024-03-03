import { Link, useLocation } from 'react-router-dom';
import css from './List.module.css';
import { IconContext } from 'react-icons';
import { VscGraph } from 'react-icons/vsc';

import availableMovies from 'data/movie/availableMovies.json';
import availableSerials from 'data/serial/availableSerials.json';

import { ratingColor } from 'service/ratingColor';

export const List = ({ header, page, data, path }) => {
  const location = useLocation();

  return (
    <div>
      <h2 className={css.Header}>
        {header}
        {page && <span>&emsp;Сторінка: {page}</span>}
      </h2>
      <ul className={css.List}>
        {data.map(item => (
          <li key={item.id}>
            <div
              className={css.Card}
              style={{
                backgroundImage: item.poster_path
                  ? `url(https://image.tmdb.org/t/p/w500${item.poster_path})`
                  : `url(${require(`data/images/noimage.jpg`)})`,
              }}
            >
              <Link to={`/${path}/${item.id}`} state={{ from: location }}>
                <div>
                  {path === 'movies' && availableMovies.includes(item.id) && (
                    <div className={css.Quality}>Full HD</div>
                  )}
                  {path === 'serials' && availableSerials.includes(item.id) && (
                    <div className={css.Quality}>Full HD</div>
                  )}
                  {!availableMovies.includes(item.id) &&
                    !availableSerials.includes(item.id) && (
                      <div className={css.Gag}></div>
                    )}

                  <section className={css.Mark}>
                    {item.vote_average > 0 && (
                      <div className={css.Rating}>
                        <IconContext.Provider
                          value={{ color: 'white', size: 17 }}
                        >
                          <VscGraph />
                        </IconContext.Provider>
                        <div style={ratingColor(item.vote_average)}>
                          {item.vote_average.toFixed(1)}
                        </div>
                      </div>
                    )}
                    {item.release_date && (
                      <div className={css.Year}>
                        {item.release_date.slice(0, 4)}
                      </div>
                    )}
                    {item.first_air_date && (
                      <div className={css.Year}>
                        {item.first_air_date.slice(0, 4)}
                      </div>
                    )}
                  </section>
                </div>
              </Link>
            </div>
            <div className={css.Title}>
              {item.title ? <p>{item.title}</p> : <p>{item.name}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
