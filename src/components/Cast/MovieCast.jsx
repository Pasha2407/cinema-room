import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/api';
import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';

export const MovieCast = ({ language }) => {
  const [isLoading, setIsLoading] = useState();
  const [cast, setCast] = useState([]);

  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const movieCast = async () => {
      try {
        const data = await fetchMovieCast(id, language);
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
    movieCast();
  }, [id, language]);

  return isLoading ? <Loader /> : <Cast cast={cast} found={found} />;
};
