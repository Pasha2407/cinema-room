import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/API';
import { Reviews } from './Reviews';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(id);
        setReviews(response);
      } catch (error) {
        console.error(error);
      } finally {
        setFound(true);
      }
    };
    movieReviews();
  }, [id]);

  return <Reviews reviews={reviews} found={found} />;
};

export default MovieReviews;
