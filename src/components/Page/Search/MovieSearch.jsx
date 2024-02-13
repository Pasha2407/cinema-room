import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { PageNumber } from '../PageNumber/PageNumber';

export const MovieSearch = ({ language }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const [isLoading, setIsLoading] = useState();

  const [foundMovies, setFoundMovies] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const [page, setPage] = useState(currentPage);

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
        const movies = await searchMovies(movieName, language, page);
        setFoundMovies(movies.results);
        setTotalPages(movies.total_pages);
        setTotalResults(movies.total_results);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    search();
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [movieName, language, page, searchParams, setSearchParams]);

  return (
    <div>
      <div className={css.SearchForm}>
        <h3>Пошук Фільмів</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="напишіть щось для пошуку"
            name="search"
          />
          <button type="submit" onClick={() => setPage(1)}>
            <IconContext.Provider value={{ size: 25, color: '#be4040' }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      {isLoading && movieName && <Loader />}

      {!isLoading && foundMovies.length > 0 && (
        <>
          <h2 className={css.ListHeader}>Фільми по запиту " {movieName} "</h2>
          <span>Знайдено фільмів {totalResults}</span>
          <List data={foundMovies} path="movies" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
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
