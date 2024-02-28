import css from './Cast.module.css';

export const Cast = ({ cast, found }) => {
  return (
    <div>
      {cast.length > 0 && (
        <ul className={css.List}>
          {cast.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                    : require('data/images/noimage.jpg')
                }
                alt=""
              ></img>
              <div className={css.ActorName}>
                <p>{item.original_name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {found && cast.length === 0 && <i>Акторський склад невідомий</i>}
    </div>
  );
};
