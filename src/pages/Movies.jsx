import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'service/TmdbAPI';
import { fetchPopularMovies } from 'service/TmdbAPI';
import { fetchTopRatedMovies } from 'service/TmdbAPI';
import { Page } from 'components/Page/Page';

export const Movies = ({ language }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [totalPagesPopular, setTotalPagesPopular] = useState(0);
  const [pagePopular, setPagePopular] = useState(1);

  const [totalPagesTopRated, setTotalPagesTopRated] = useState(0);
  const [pageTopRated, setPageTopRated] = useState(1);

  const movieData = { trendingMovies, popularMovies, topRatedMovies };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingData = await fetchTrendingMovies(language);
        setTrendingMovies(trendingData);

        const popularData = await fetchPopularMovies(language, pagePopular);
        setPopularMovies(popularData.results);
        setTotalPagesPopular(popularData.total_pages);

        const topRatedData = await fetchTopRatedMovies(language, pageTopRated);
        setTopRatedMovies(topRatedData.results);
        setTotalPagesTopRated(topRatedData.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [language, pagePopular, pageTopRated]);

  return (
    <Page
      movieData={movieData}
      language={language}
      movieTotalPagesPopular={totalPagesPopular}
      moviePagePopular={pagePopular}
      movieSetPagePopular={setPagePopular}
      movieTotalPagesTopRated={totalPagesTopRated}
      moviePageTopRated={pageTopRated}
      movieSetPageTopRated={setPageTopRated}
    />
  );
};
