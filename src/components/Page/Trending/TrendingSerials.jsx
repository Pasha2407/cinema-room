import { useEffect, useState } from 'react';

import { fetchTrendingSerials } from 'service/tmdbAPI';
import { List } from 'components/List/List';

export const TrendingSerials = ({ language }) => {
  const [trendingSerials, setTrendingSerials] = useState([]);

  useEffect(() => {
    const fetchSerials = async () => {
      try {
        const data = await fetchTrendingSerials(language);
        setTrendingSerials(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSerials();
  }, [language]);

  return (
    <div>
      <List header="Зараз в тренді" data={trendingSerials} path="serials" />
    </div>
  );
};
