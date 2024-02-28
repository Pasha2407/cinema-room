import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSerialCast } from 'service/api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';

export const SerialCast = ({ language }) => {
  const [isLoading, setIsLoading] = useState();
  const [cast, setCast] = useState([]);

  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const serialCast = async () => {
      try {
        const data = await fetchSerialCast(id, language);
        setCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
        setFound(true);
      }
    };
    serialCast();
  }, [id, language]);

  return isLoading ? <Loader /> : <Cast cast={cast} found={found} />;
};
