import React, { useEffect, useState } from 'react';
import { fetchTrendingSerials } from 'service/TmdbAPI';
import { Page } from 'components/Page/Page';

export const Serials = ({ language, path }) => {
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

  return <Page data={trendingSerials} path={path} />;
};
