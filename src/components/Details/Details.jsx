import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IconContext } from 'react-icons';
import { IoMdArrowRoundBack } from 'react-icons/io';

import css from './Details.module.css';
import { VideoPlayer } from 'components/Details/VideoPlayer/VideoPlayer';
import { HeaderSection } from './HeaderSection/HeaderSection';
import { useMediaQuery } from 'react-responsive';

export const Details = ({
  data,
  movieData,
  serialData,
  back,
  id,
  availableId,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 500 }) ? true : false;
  const { t } = useTranslation();

  const searchLink = movieData
    ? `https://rezka.ag/search/?do=search&subaction=search&q=${data.title}`
    : `https://rezka.ag/search/?do=search&subaction=search&q=${data.name}`;
  const iName = movieData ? t('details.play.film') : t('details.play.serial');

  return (
    <div
      style={{
        backgroundColor: '#313131',
      }}
    >
      <div
        className={css.Background}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
        }}
      >
        <div className={css.BackgroundFilter}>
          <div className={css.Wrapper}>
            <Link to={back.current}>
              <IconContext.Provider value={{ color: '#be4040', size: 35 }}>
                <IoMdArrowRoundBack />
              </IconContext.Provider>
              {t('details.back')}
            </Link>

            <HeaderSection
              data={data}
              movieData={movieData}
              serialData={serialData}
            />

            {isMobile && (
              <div className={css.MobileContent}>
                <h2>
                  <span>{t('details.header.genre')}</span>
                </h2>
                {data.genres.length > 0 ? (
                  <section>
                    {data.genres?.slice(0, 4).map(item => (
                      <b key={item.name}>{item.name}</b>
                    ))}
                  </section>
                ) : (
                  <i>{t('details.header.not1')}</i>
                )}

                <h2 style={{ marginTop: '10px' }}>
                  <span>{t('details.header.country')}</span>
                </h2>
                {data.production_countries.length > 0 ? (
                  <section>
                    {data.production_countries?.slice(0, 4).map(item => (
                      <b key={item.name}>{item.name}</b>
                    ))}
                  </section>
                ) : (
                  <i>{t('details.header.not2')}</i>
                )}
              </div>
            )}

            <h3>{t('details.companies')}</h3>
            {data.production_companies.length > 0 && (
              <section className={css.Companies}>
                {data.production_companies?.slice(0, 5).map(item => (
                  <article key={item.id}>
                    {item.logo_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.logo_path}`}
                        alt=""
                      ></img>
                    ) : (
                      <div>
                        <p>{item.name}</p>
                      </div>
                    )}
                  </article>
                ))}
              </section>
            )}
            {data.production_companies.length === 0 && (
              <i className={css.NotC}>{t('details.notC')}</i>
            )}

            {availableId.toString().includes(id) ? (
              <VideoPlayer id={id} searchLink={searchLink} />
            ) : (
              <div className={css.NotFilm}>
                <i>
                  {t('details.play.this')} {iName} {t('details.play.not')}
                </i>
                <a href={searchLink} target="blank">
                  {t('general.hdrezka2')}
                </a>
              </div>
            )}

            <h3>{t('details.description')}</h3>
            {data.overview.length > 0 ? (
              <p> {data.overview}</p>
            ) : (
              <i className={css.NoInf}>{t('details.notD')}</i>
            )}

            <div className={css.LinkButton}>
              <h3>{t('details.addInf.title')}</h3>
              <NavLink
                to="cast"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                {t('details.addInf.cast')}
              </NavLink>
              <NavLink
                to="reviews"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                {t('details.addInf.reviews')}
              </NavLink>
            </div>

            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
