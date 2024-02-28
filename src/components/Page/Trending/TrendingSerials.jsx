import { useEffect, useState } from 'react';

import { fetchTrendingSerials } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const TrendingSerials = ({ language }) => {
  const [isLoading, setIsLoading] = useState();

  const [trendingSerials, setTrendingSerials] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const data = await fetchTrendingSerials(language);
        setTrendingSerials(data);
      } catch (error) {
        console.error(error);
      }  finally {
        setTimeout(()=>{
          setIsLoading(false);
        }, 300)
    }
    };
    fetchSerials();
  }, [language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header="Зараз в тренді" data={trendingSerials} path="serials" />
    </div>
  );
};
