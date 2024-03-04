import { useEffect, useState } from 'react';

import { findExternalIds } from 'service/api';
import { findSerialById } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';

export const RecommendedSerials = ({ ids, header, language }) => {
  const [isLoading, setIsLoading] = useState();

  const [serials, setSerials] = useState([]);
  const serialIds = ids;

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const dataIds = await findExternalIds();
        console.log(dataIds.tvdb_id);
        const serial1 = await findSerialById(serialIds[0], language);
        const serial2 = await findSerialById(serialIds[1], language);
        const serial3 = await findSerialById(serialIds[2], language);
        const serial4 = await findSerialById(serialIds[3], language);
        const serial5 = await findSerialById(serialIds[4], language);
        const serial6 = await findSerialById(serialIds[5], language);
        const serial7 = await findSerialById(serialIds[6], language);
        const serial8 = await findSerialById(serialIds[7], language);
        const serial9 = await findSerialById(serialIds[8], language);
        const serial10 = await findSerialById(serialIds[9], language);
        const data = [
          serial1[0],
          serial2[0],
          serial3[0],
          serial4[0],
          serial5[0],
          serial6[0],
          serial7[0],
          serial8[0],
          serial9[0],
          serial10[0],
        ];
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
  }, [serialIds, language]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header={header} data={serials} path="serials" />
    </div>
  );
};
