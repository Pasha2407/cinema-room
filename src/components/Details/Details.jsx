import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
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

  const searchLink = movieData
    ? `https://rezka.ag/search/?do=search&subaction=search&q=${data.title}`
    : `https://rezka.ag/search/?do=search&subaction=search&q=${data.name}`;
  const iName = movieData ? 'фільму' : 'серіалу';

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
              Назад
            </Link>

            <HeaderSection
              data={data}
              movieData={movieData}
              serialData={serialData}
            />

            {isMobile && (
              <div className={css.MobileContent}>
                <h2>
                  <span>Жанр</span>
                </h2>
                {data.genres.length > 0 ? (
                  <section>
                    {data.genres?.slice(0, 4).map(item => (
                      <b key={item.name}>{item.name}</b>
                    ))}
                  </section>
                ) : (
                  <i>невідомий</i>
                )}

                <h2 style={{ marginTop: '10px' }}>
                  <span>Країна</span>
                </h2>
                {data.production_countries.length > 0 ? (
                  <section>
                    {data.production_countries?.slice(0, 4).map(item => (
                      <b key={item.name}>{item.name}</b>
                    ))}
                  </section>
                ) : (
                  <i>невідома</i>
                )}
              </div>
            )}

            <h3>Компанії</h3>
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
            {data.production_companies.length === 0 && <i>Компанії невідомі</i>}

            {availableId.toString().includes(id) ? (
              <VideoPlayer id={id} searchLink={searchLink} />
            ) : (
              <div className={css.NotFilm}>
                <i>Цього {iName} не має для перегляду</i>
                <a href={searchLink} target="blank">
                  Знайти на HDrezka
                </a>
              </div>
            )}

            <h3>Опис</h3>
            {data.overview.length > 0 ? (
              <p> {data.overview}</p>
            ) : (
              <i className={css.NoInf}>Опису не має</i>
            )}

            <div className={css.LinkButton}>
              <h3>Додаткова інформація</h3>
              <NavLink
                to="cast"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                Акторський склад
              </NavLink>
              <NavLink
                to="reviews"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                Відгуки
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
