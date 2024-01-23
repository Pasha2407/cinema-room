import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/API';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const path = 'movies';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={css.Container}>
      <h2>Trending movies today</h2>
      <MovieList data={trendingMovies} path={path} />
    </div>
  );
};
