import css from './Title.module.css';
import { ratingColor } from 'service/ratingColor';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

export const MovieTitle = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 }) ? true : false;
  const { t } = useTranslation();

  const rating = data.vote_average > 0 && data.vote_average.toFixed(1);

  const budget =
    data.budget > 0 &&
    data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const revenue =
    data.revenue > 0 &&
    data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  let hour = data.runtime > 0 && Math.floor(data.runtime / 60);
  let hourString;
  if (hour === 1) hourString = t('details.header.hour1');
  else if (hour > 1) hourString = t('details.header.hour2');
  else {
    hourString = '';
    hour = '';
  }
  const minute = data.runtime && data.runtime % 60;

  return (
    <div className={css.Title}>
      {data.title && <h1>{data.title}</h1>}

      <h2>
        <span>{t('details.header.rating')} </span>
        {rating ? (
          <span className={css.Rating} style={ratingColor(rating)}>
            {rating}
          </span>
        ) : (
          <i>{t('details.header.not2')}</i>
        )}
      </h2>

      <h2>
        <span>{t('details.header.year')} </span>
        {data.release_date.slice(0, 4)}
      </h2>
      {!isMobile && (
        <>
          <h2>
            <span>{t('details.header.genre')}</span>
          </h2>
          {data.genres.length > 0 ? (
            <section>
              {data.genres?.map(item => (
                <b key={item.name}>{item.name}</b>
              ))}
            </section>
          ) : (
            <i>{t('details.header.not1')}</i>
          )}

          <h2>
            <span>{t('details.header.country')}</span>
          </h2>
          {data.production_countries.length > 0 ? (
            <section>
              {data.production_countries?.map(item => (
                <b key={item.name}>{item.name}</b>
              ))}
            </section>
          ) : (
            <i>{t('details.header.not2')}</i>
          )}
        </>
      )}
      <h2>
        <span>{t('details.header.budget')} </span>
        {budget ? `${budget} $` : <i>{t('details.header.not1')}</i>}
      </h2>

      <h2>
        <span>{t('details.header.revenue')} </span>
        {revenue ? `${revenue} $` : <i>{t('details.header.not1')}</i>}
      </h2>

      {data.tagline && (
        <h2>
          <span>{t('details.header.slogan')} </span>
          {data.tagline}
        </h2>
      )}

      {data.runtime > 0 && (
        <h2>
          <span>{t('details.header.duration')} </span>
          {hour} {hourString} {minute} {t('details.header.min')}
        </h2>
      )}
    </div>
  );
};
