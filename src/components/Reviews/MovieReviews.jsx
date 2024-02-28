import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';
import { Reviews } from './Reviews';
import { Loader } from 'components/Loader/Loader';

export const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState();
  const [reviews, setReviews] = useState([]);
  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);
        setReviews(response);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
        setFound(true);
      }
    };
    movieReviews();
  }, [id]);

  return isLoading ? <Loader /> : <Reviews reviews={reviews} found={found} />;
};
