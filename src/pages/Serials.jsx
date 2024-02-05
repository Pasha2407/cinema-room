import { List } from 'components/List/List';
import React, { useEffect, useState } from 'react';
import { fetchTrendingSerials } from 'service/tmdbAPI';

export const Serials = ({ language }) => {
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
      <List data={trendingSerials} path="serials" />
    </div>
  );
};
