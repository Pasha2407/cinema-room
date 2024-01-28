import css from './HeaderSection.module.css';

import { MovieTitle } from './Title/MovieTitle';
import { SerialTitle } from './Title/SerialTitle';

export const HeaderSection = ({ data, movieData, serialData }) => {
  return (
    <div className={css.Container}>
      <aside
        style={{
          backgroundImage: data.poster_path
            ? `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
            : `url(${require(`data/images/noimage.jpg`)})`,
        }}
      ></aside>
      {movieData !== undefined && <MovieTitle data={movieData} />}
      {serialData !== undefined && <SerialTitle data={serialData} />}
    </div>
  );
};
