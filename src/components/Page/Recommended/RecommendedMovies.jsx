import { useEffect, useState } from 'react';

import { findMovieById } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const RecommendedMovies = ({ ids, header, language }) => {
  const [isLoading, setIsLoading] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const data = [];
        for (const id of ids) {
          const movie = await findMovieById(id, language);
          data.push(movie[0]);
        }
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchMovies();
  }, [ids, language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header={header} data={movies} path="movies" />
    </div>
  );
};
