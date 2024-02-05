import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/TmdbAPI';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const MovieSearch = ({
  data,
  path,
  language,
  totalPagesPopular,
  pagePopular,
  setPagePopular,
  totalPagesTopRated,
  pageTopRated,
  setPageTopRated,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [isLoading, setIsLoading] = useState();

  const [foundMovies, setFoundMovies] = useState([]);

  const [searchTotalPages, setSearchTotalPages] = useState(0);
  const [searchTotalResults, setSearchTotalResults] = useState(0);
  const [searchPage, setSearchPage] = useState(1);
  if (searchTotalResults > 200) setSearchTotalResults('500+');

  const [trending, setTrending] = useState(true);
  const [popular, setPopular] = useState(false);
  const [topRated, setTopRated] = useState(false);

  const choiceTrending = () => {
    setTrending(true);
    setPopular(false);
    setTopRated(false);
  };
  const choicePopular = () => {
    setTrending(false);
    setPopular(true);
    setTopRated(false);
  };
  const choiceTopRated = () => {
    setTrending(false);
    setPopular(false);
    setTopRated(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 320, behavior: 'smooth' });
  }, [pagePopular, pageTopRated]);

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
        const movies = await searchMovies(movieName, language, searchPage);
        setFoundMovies(movies.results);
        setSearchTotalPages(movies.total_pages);
        setSearchTotalResults(movies.total_results);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    search();
  }, [movieName, language, searchPage]);

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
          <button type="submit" onClick={() => setSearchPage(1)}>
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
            <Link to="/movies" onClick={() => setSearchPage(1)}>
              Скинути
            </Link>
          </div>
          <h2 className={css.ListHeader}>Фільми по запиту " {movieName} "</h2>
          <span>Знайдено фільмів {searchTotalResults}</span>
          <List data={foundMovies} path={path} />
          <div>
            <span>Сторінка</span>
            {Array.from(
              { length: Math.min(searchTotalPages, 25) },
              (_, index) => (
                <button
                  style={{
                    backgroundColor: searchPage === index + 1 ? 'red' : 'white',
                  }}
                  key={index + 1}
                  onClick={() => setSearchPage(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      )}

      {!movieName && trending && (
        <>
          <h2 className={css.ListHeader}>Зараз в тренді</h2>
          <button onClick={choicePopular}>Популярні</button>
          <button onClick={choiceTopRated}>Топ рейтинга</button>
          <List data={data.trendingMovies} path={path} />
        </>
      )}

      {!movieName && popular && (
        <>
          <h2 className={css.ListHeader}>Популярні</h2>
          <button onClick={choiceTopRated}>Топ рейтинга</button>
          <button onClick={choiceTrending}>Зараз в тренді</button>
          <List data={data.popularMovies} path={path} />
          <div>
            <span>Сторінка</span>
            {Array.from(
              { length: Math.min(totalPagesPopular, 25) },
              (_, index) => (
                <button
                  style={{
                    backgroundColor:
                      pagePopular === index + 1 ? 'red' : 'white',
                  }}
                  key={index + 1}
                  onClick={() => setPagePopular(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </>
      )}

      {!movieName && topRated && (
        <>
          <h2 className={css.ListHeader}>Топ рейтинга</h2>
          <button onClick={choiceTrending}>Зараз в тренді</button>
          <button onClick={choicePopular}>Популярні</button>
          <List data={data.topRatedMovies} path={path} />
          <div>
            <span>Сторінка</span>
            {Array.from(
              { length: Math.min(totalPagesTopRated, 25) },
              (_, index) => (
                <button
                  style={{
                    backgroundColor:
                      pageTopRated === index + 1 ? 'red' : 'white',
                  }}
                  key={index + 1}
                  onClick={() => setPageTopRated(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
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
