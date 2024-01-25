import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/api';
import { Page } from 'components/Page/Page';

export const Movies = ({ language, path }) => {
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

  return <Page data={trendingMovies} path={path} />;
};
