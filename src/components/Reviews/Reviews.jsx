import css from './Reviews.module.css';

export const Reviews = ({ reviews, found }) => {
  return (
    <div>
      <h2 className={css.Title}>Reviews 👇</h2>
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
