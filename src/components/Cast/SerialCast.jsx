import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSerialCast } from '../../service/API';
import { Cast } from 'components/Cast/Cast';

const SerialCast = ({ language }) => {
  const [cast, setCast] = useState([]);

  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const serialCast = async () => {
      try {
        const data = await fetchSerialCast(id, language);
        setCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setFound(true);
      }
    };
    serialCast();
  }, [id, language]);

  return <Cast cast={cast} found={found} />;
};

export default SerialCast;
