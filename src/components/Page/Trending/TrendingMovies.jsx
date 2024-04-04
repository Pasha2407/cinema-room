import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchTrendingMovies } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const TrendingMovies = ({ language }) => {
  const [isLoading, setIsLoading] = useState();
  const { t } = useTranslation();
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
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchMovies();
  }, [language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header={t('list.trend')} data={trendingMovies} path="movies" />
    </div>
  );
};
