import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';
import css from './Reviews.module.css';

export const Reviews = () => {
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

  return (
    <div>
      <h2 className={css.Title}>Movie Reviews 👇</h2>
      {reviews.length > 0 && (
        <div>
          {reviews.map(item => (
            <div key={item.id}>
              <b>{item.author}</b>
              <p className={css.Description}>{item.content}</p>
            </div>
          ))}
        </div>
      )}
      {found && reviews.length === 0 && <i>No reviews found</i>}
    </div>
  );
};

export default Reviews;
