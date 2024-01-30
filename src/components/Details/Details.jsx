import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoMdArrowRoundBack } from 'react-icons/io';

import css from './Details.module.css';
import { VideoPlayer } from 'components/Details/VideoPlayer/VideoPlayer';
import { HeaderSection } from './HeaderSection/HeaderSection';

export const Details = ({
  data,
  movieData,
  serialData,
  back,
  id,
  availableId,
}) => {
  const searchLink = movieData
    ? `https://rezka.ag/search/?do=search&subaction=search&q=${data.title}`
    : `https://rezka.ag/search/?do=search&subaction=search&q=${data.name}`;
  const iName = movieData ? 'фільму' : 'серіалу';

  return (
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
            <i>Опису не має</i>
          )}

          <div className={css.LinkButton}>
            <h3>Додаткова інформація</h3>
            <Link to="cast">Акторський склад</Link>
            <Link to="reviews">Відгуки</Link>
          </div>

          <Suspense
            fallback={
              <p style={{ paddingLeft: 30 }}>
                <i>Loading...</i>
              </p>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
