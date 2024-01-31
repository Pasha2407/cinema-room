import React, { useEffect, useState } from 'react';
import { fetchTrendingSerials } from 'service/TmdbAPI';
import { Page } from 'components/Page/Page';

export const Serials = ({ language }) => {
  const [trendingSerials, setTrendingSerials] = useState([]);
  console.log(trendingSerials);

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

  return <Page serialData={trendingSerials} language={language} />;
};
