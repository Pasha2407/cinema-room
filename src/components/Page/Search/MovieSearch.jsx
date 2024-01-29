import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/TmdbAPI';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const MovieSearch = ({ data, path, language }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const movieName = searchParams.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.search.value.toLowerCase();
    if (query.trim() === '') return alert('Can not be empty');
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    const search = async () => {
      try {
        setIsLoading(true);
        const movies = await searchMovies(movieName, language);
        setFoundMovies(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    search();
  }, [movieName, language]);

  return (
    <div>
      <div className={css.SearchForm}>
        <h3>Пошук Фільмів</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="шукайте фільми будь якою мовою"
            name="search"
          />
          <button type="submit">
            <IconContext.Provider value={{ size: 25, color: '#be4040' }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      {isLoading && movieName && <Loader />}

      {!isLoading && foundMovies.length > 0 && (
        <>
          <div className={css.CancelButton}>
            <Link to="/movies">Скинути</Link>
          </div>
          <h2 className={css.ListHeader}>Фільми по запиту " {movieName} "</h2>
          <List data={foundMovies} path={path} />
        </>
      )}

      {!movieName && (
        <>
          <h2 className={css.ListHeader}>Зараз в тренді</h2>
          <List data={data} path={path} />
        </>
      )}
      {foundMovies.length === 0 && !isLoading && movieName && (
        <i className={css.NotFound}>
          Фільмів по запиту " {movieName} " не знайдено
        </i>
      )}
    </div>
  );
};

export default MovieSearch;
