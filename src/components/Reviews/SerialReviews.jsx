import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSerialReviews } from 'service/api';
import { Reviews } from './Reviews';
import { Loader } from 'components/Loader/Loader';

export const SerialReviews = () => {
  const [isLoading, setIsLoading] = useState();
  const [reviews, setReviews] = useState([]);
  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const serialReviews = async () => {
      try {
        const response = await fetchSerialReviews(id);
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
    serialReviews();
  }, [id]);

  return isLoading ? <Loader /> : <Reviews reviews={reviews} found={found} />;
};
