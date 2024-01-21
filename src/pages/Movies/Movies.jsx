import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import css from './Movies.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Movies = () => {
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
        const movies = await searchMovies(movieName);
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
  }, [movieName]);

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
      {isLoading && movieName ? <Loader /> : <MovieList movies={foundMovies} />}
      {found && !isLoading && foundMovies.length === 0 && movieName && (
        <h2>No movie found for the request "{movieName}"</h2>
      )}
    </div>
  );
};

export default Movies;
