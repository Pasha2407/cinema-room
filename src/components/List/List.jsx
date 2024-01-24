import { Link, useLocation } from 'react-router-dom';
import css from './List.module.css';

import availableMovies from 'data/availableMovies.json';
import availableSerials from 'data/availableSerials.json';

export const List = ({ data, path }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.List}>
        {data.map(item => (
          <li
            key={item.id}
            style={{
              backgroundImage: item.poster_path
                ? `url(https://image.tmdb.org/t/p/w500${item.poster_path})`
                : `url(${require(`data/images/noimage.jpg`)})`,
            }}
          >
            <Link to={`/${path}/${item.id}`} state={{ from: location }}>
              {path === 'movies' && availableMovies.includes(item.id) && (
                <div className={css.qu}>Full HD</div>
              )}
              {path === 'serials' && availableSerials.includes(item.id) && (
                <div className={css.qu}>Full HD</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
