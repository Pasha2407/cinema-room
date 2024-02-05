import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'service/tmdbAPI';
import { List } from 'components/List/List';

export const TrendingMovies = ({ language }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies(language);
        setTrendingMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [language]);

  return (
    <div>
      <List header="Зараз в тренді" data={trendingMovies} path="movies" />
    </div>
  );
};
