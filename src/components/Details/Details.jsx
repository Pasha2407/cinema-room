import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoMdArrowRoundBack } from 'react-icons/io';

import css from './Details.module.css';
import { VideoPlayer } from 'components/VideoPlayer/VideoPlayer';

export const Details = ({ data, back, id, availableId }) => {
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
            <IconContext.Provider value={{ color: '#be4040', size: 30 }}>
              <IoMdArrowRoundBack />
            </IconContext.Provider>
            Go back
          </Link>
          <div className={css.Container}>
            <aside
              style={{
                backgroundImage: data.poster_path
                  ? `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
                  : `url(${require(`data/images/noimage.jpg`)})`,
              }}
            ></aside>
            <div className={css.Title}>
              <h2>{data.title}</h2>
              <b>User score: {Math.round(data.vote_average * 10)}%</b>
              <h3>Overview</h3>
              {data.overview.length > 0 ? (
                <p> {data.overview}</p>
              ) : (
                <i>No overview found</i>
              )}
              <h3>Genres</h3>
              {data.genres.length > 0 ? (
                <p>
                  {data.genres?.map(item => (
                    <span key={item.id}> {item.name}</span>
                  ))}
                </p>
              ) : (
                <i>No genres found</i>
              )}
              <h3>Production companies</h3>
              {data.production_companies.length > 0 && (
                <section>
                  {data.production_companies?.map(item => (
                    <div key={item.id} className={css.Companies}>
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
                    </div>
                  ))}
                </section>
              )}
              {data.production_companies.length === 0 && (
                <i>No companies found</i>
              )}
              <h3>Release date: {data.release_date}</h3>
            </div>
          </div>
          {availableId.toString().includes(id) ? (
            <VideoPlayer id={id} />
          ) : (
            <i>Фільму не має</i>
          )}
          <div className={css.LinkButton}>
            <h3>Additional information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
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
