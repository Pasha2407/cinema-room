import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/api';
import { Cast } from 'components/Cast/Cast';

const MovieCast = ({ language }) => {
  const [cast, setCast] = useState([]);

  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const data = await fetchMovieCast(id, language);
        setCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setFound(true);
      }
    };
    movieCast();
  }, [id, language]);

  return <Cast cast={cast} found={found} />;
};

export default MovieCast;
