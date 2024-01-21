import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.List}>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <img
                className={css.Image}
                src={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                    : require('../../images/noimage1.jpg')
                }
                alt=""
              ></img>
              <div className={css.Title}>
                <p>{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
