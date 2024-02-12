import { Suspense, lazy, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';

import css from './App.module.css';

import { Home } from 'pages/Home';
import { Serials } from 'pages/Serials';
import { Movies } from 'pages/Movies';

import { Information } from 'pages/Information';
import { TrendingMovies } from 'components/Page/Trending/TrendingMovies';
import { PopularMovies } from 'components/Page/Popular/PopularMovies';
import MovieSearch from 'components/Page/Search/MovieSearch';
import { Filter } from 'components/Page/Filter/Filter';
import { TopRatedMovies } from 'components/Page/TopRated/TopRatedMovies';
import { TrendingSerials } from 'components/Page/Trending/TrendingSerials';
import { PopularSerials } from 'components/Page/Popular/PopularSerials';
import { TopRatedSerials } from 'components/Page/TopRated/TopRatedSerials';

const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const SerialDetails = lazy(() => import('../../pages/SerialDetails'));

const MovieCast = lazy(() => import('../Cast/MovieCast'));
const MovieReviews = lazy(() => import('../Reviews/MovieReviews'));
const SerialCast = lazy(() => import('../Cast/SerialCast'));
const SerialReviews = lazy(() => import('../Reviews/SerialReviews'));

export const App = () => {
  const [language, setLanguage] = useState('uk-UA');

  const location = useLocation();
  let lock;
  if (location.pathname.startsWith('/movies')) {
    lock = true;
  }

  return (
    <div className={css.Container}>
      <header>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            CR
          </NavLink>
          <NavLink
            to="/movies/trending"
            style={{
              background: lock ? '#be4040' : '',
            }}
          >
            Фільми
          </NavLink>
          <NavLink
            to="/serials"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            Серіали
          </NavLink>
          <NavLink
            to="/information"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            Довідка
          </NavLink>
          <section className={css.Language}>
            <button onClick={() => setLanguage('uk-UA')}>UA</button>
            <button onClick={() => setLanguage('en-US')}>EN</button>
          </section>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
            <p style={{ paddingLeft: 30 }}>
              <i>Loading...</i>
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<Home language={language} />} />

            <Route path="/movies" element={<Movies language={language} />}>
              <Route path="filter" element={<Filter language={language} />} />
              <Route
                path="search"
                element={<MovieSearch language={language} />}
              />
              <Route
                path="trending"
                element={<TrendingMovies language={language} />}
              />
              <Route
                path="popular"
                element={<PopularMovies language={language} />}
              />
              <Route
                path="top-rated"
                element={<TopRatedMovies language={language} />}
              />
            </Route>

            <Route path="/serials" element={<Serials language={language} />}>
              {/* <Route path="filter" element={<Filter language={language} />} />
              <Route
                path="search"
                element={<MovieSearch language={language} />}
              /> */}
              <Route
                path="trending"
                element={<TrendingSerials language={language} />}
              />
              <Route
                path="popular"
                element={<PopularSerials language={language} />}
              />
              <Route
                path="top-rated"
                element={<TopRatedSerials language={language} />}
              />
            </Route>

            <Route
              path="/information"
              element={<Information language={language} />}
            />

            <Route
              path="/movies/:id"
              element={<MovieDetails language={language} />}
            >
              <Route path="cast" element={<MovieCast language={language} />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>

            <Route
              path="/serials/:id"
              element={<SerialDetails language={language} />}
            >
              <Route path="cast" element={<SerialCast language={language} />} />
              <Route path="reviews" element={<SerialReviews />} />
            </Route>

            <Route path="*" element={<Home language={language} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
