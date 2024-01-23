import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ data, path }) => {
  const location = useLocation();
  const selectedId = [414906, 872585, 286217, 299534, 51497];

  return (
    <div>
      <ul className={css.List}>
        {data.map(item => (
          <li
            key={item.id}
            style={{
              backgroundImage: item.poster_path
                ? `url(https://image.tmdb.org/t/p/w500${item.poster_path})`
                : `url(${require(`images/noimage2.jpg`)})`,
            }}
          >
            <Link to={`/${path}/${item.id}`} state={{ from: location }}>
              {selectedId.includes(item.id) && (
                <div className={css.qu}>Full HD</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
