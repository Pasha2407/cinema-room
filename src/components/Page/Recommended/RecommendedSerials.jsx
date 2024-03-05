import { useEffect, useState } from 'react';

import { findExternalIds } from 'service/api';
import { findSerialById } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const RecommendedSerials = ({ ids, header, language }) => {
  const [isLoading, setIsLoading] = useState();
  const [serials, setSerials] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const dataIds = await findExternalIds();
        console.log(dataIds.imdb_id);
        const data = [];
        for (const id of ids) {
          const serial = await findSerialById(id, language);
          data.push(serial[0]);
        }
        setSerials(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchSerials();
  }, [ids, language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header={header} data={serials} path="serials" />
    </div>
  );
};
