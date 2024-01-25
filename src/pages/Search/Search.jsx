import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/TmdbAPI';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Search = ({ language, path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [found, setFound] = useState(false);
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
        setTimeout(() => {
          setFound(true);
        }, 2000);
      }
    };
    search();
  }, [movieName, language]);

  return (
    <div className={css.Wrapper}>
      <div className={css.Container}>
        <h2>Movie Search</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="type here" name="search" />
          <button type="submit">
            <IconContext.Provider value={{ size: 20 }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      {isLoading && movieName ? (
        <Loader />
      ) : (
        <List data={foundMovies} path={path} />
      )}
      {found && !isLoading && foundMovies.length === 0 && movieName && (
        <h2>No movie found for the request "{movieName}"</h2>
      )}
    </div>
  );
};

export default Search;
