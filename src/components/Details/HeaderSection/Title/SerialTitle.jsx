import css from './Title.module.css';
import { ratingColor } from 'service/ratingColor';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

export const SerialTitle = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 }) ? true : false;
  const { t } = useTranslation();

  const rating = data.vote_average > 0 && data.vote_average.toFixed(1);

  const firstDate = data.first_air_date && data.first_air_date.slice(0, 4);
  const lastDate = data.last_air_date && data.last_air_date.slice(0, 4);

  return (
    <div className={css.Title}>
      {data.name && <h1>{data.name}</h1>}

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
        {firstDate === lastDate ? firstDate : `${firstDate} — ${lastDate}`}
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

      {data.tagline && (
        <h2>
          <span>{t('details.header.slogan')} </span>
          {data.tagline}
        </h2>
      )}

      <h2>
        <span>{t('details.header.seasons')} </span>
        {data.number_of_seasons ? (
          data.number_of_seasons
        ) : (
          <i>{t('details.header.not3')}</i>
        )}
      </h2>

      <h2>
        <span>{t('details.header.series')} </span>
        {data.number_of_episodes ? (
          data.number_of_episodes
        ) : (
          <i>{t('details.header.not3')}</i>
        )}
      </h2>
    </div>
  );
};
