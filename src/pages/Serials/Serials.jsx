import React, { useEffect, useState } from 'react';
import { fetchTrendingSerials, fetchPopularSerials } from 'service/API';
import { MovieList } from 'components/MovieList/MovieList';
import css from './Serials.module.css';

export const Serials = () => {
  const [trendingSerials, setTrendingSerials] = useState([]);
  const [popularSerials, setPopularSerials] = useState([]);
  const [popular, setPopular] = useState(false);
  const path = 'serials';

  useEffect(() => {
    const fetchSerials = async () => {
      try {
        const data = await fetchTrendingSerials();
        setTrendingSerials(data);
        const popular = await fetchPopularSerials();
        setPopularSerials(popular);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSerials();
  }, []);

  return (
    <div className={css.Container}>
      <div className={css.ControlPanel}>
        <ul>
          <button onClick={() => setPopular(true)}>Popular</button>
        </ul>
      </div>
      {!popular ? (
        <>
          <h2>Trending serials today</h2>
          <MovieList data={trendingSerials} path={path} />
        </>
      ) : (
        <>
          <h2>Popular serials</h2>
          <MovieList data={popularSerials} path={path} />
        </>
      )}
    </div>
  );
};
