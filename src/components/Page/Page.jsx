import { FilterSection } from './FilterSection/FilterSection';
import css from './Page.module.css';
import MovieSearch from './Search/MovieSearch';
import SerialSearch from './Search/SerialSearch';

export const Page = ({ movieData, serialData, language }) => {
  return (
    <div className={css.Container}>
      <FilterSection />
      {movieData !== undefined && (
        <MovieSearch data={movieData} path="movies" language={language} />
      )}
      {serialData !== undefined && (
        <SerialSearch data={serialData} path="serials" language={language} />
      )}
    </div>
  );
};
