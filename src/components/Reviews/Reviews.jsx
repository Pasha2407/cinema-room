import css from './Reviews.module.css';

export const Reviews = ({ reviews, found }) => {
  return (
    <div className={css.Container}>
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
      {found && reviews.length === 0 && <i>Відгуків немає</i>}
    </div>
  );
};
