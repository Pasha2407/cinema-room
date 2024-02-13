import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSerialReviews } from 'service/api';
import { Reviews } from './Reviews';

const SerialReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [found, setFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const serialReviews = async () => {
      try {
        const response = await fetchSerialReviews(id);
        setReviews(response);
      } catch (error) {
        console.error(error);
      } finally {
        setFound(true);
      }
    };
    serialReviews();
  }, [id]);

  return <Reviews reviews={reviews} found={found} />;
};

export default SerialReviews;
