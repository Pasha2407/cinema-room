import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/TmdbAPI';
import { Page } from 'components/Page/Page';

export const Movies = ({ language }) => {
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

  return <Page movieData={trendingMovies} language={language} />;
};
