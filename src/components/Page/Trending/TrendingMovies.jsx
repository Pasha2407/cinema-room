import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const TrendingMovies = ({ language }) => {
  const [isLoading, setIsLoading] = useState();

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies(language);
        setTrendingMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(()=>{
          setIsLoading(false);
        }, 300)
      }
    };
    fetchMovies();
  }, [language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header="Зараз в тренді" data={trendingMovies} path="movies" />
    </div>
  );
};
