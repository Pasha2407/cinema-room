import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchTrendingSerials } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const TrendingSerials = ({ language }) => {
  const [isLoading, setIsLoading] = useState();
  const { t } = useTranslation();
  const [trendingSerials, setTrendingSerials] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const data = await fetchTrendingSerials(language);
        setTrendingSerials(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchSerials();
  }, [language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header={t('list.trend')} data={trendingSerials} path="serials" />
    </div>
  );
};
