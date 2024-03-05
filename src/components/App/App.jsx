import { Suspense, lazy, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';

import css from './App.module.css';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Serials } from 'pages/Serials';
import { Information } from 'pages/Information';

import { TrendingMovies } from 'components/Page/Trending/TrendingMovies';
import { PopularMovies } from 'components/Page/Popular/PopularMovies';
import { MovieSearch } from 'components/Page/Search/MovieSearch';
import { MovieFilter } from 'components/Page/Filter/MovieFilter';
import { TopRatedMovies } from 'components/Page/TopRated/TopRatedMovies';
import { TrendingSerials } from 'components/Page/Trending/TrendingSerials';
import { PopularSerials } from 'components/Page/Popular/PopularSerials';
import { TopRatedSerials } from 'components/Page/TopRated/TopRatedSerials';
import { SerialSearch } from 'components/Page/Search/SerialSearch';
import { SerialFilter } from 'components/Page/Filter/SerialFilter';

import { MovieCast } from 'components/Cast/MovieCast';
import { MovieReviews } from 'components/Reviews/MovieReviews';
import { SerialCast } from 'components/Cast/SerialCast';
import { SerialReviews } from 'components/Reviews/SerialReviews';
import { RecommendedMovies } from 'components/Page/Recommended/RecommendedMovies';
import { RecommendedSerials } from 'components/Page/Recommended/RecommendedSerials';

import recommendedMovies from 'data/movie/recommendedMovies.json';
import recommendedCartoons from 'data/movie/recommendedCartoons.json';
import recommendedSerials from 'data/serial/recommendedSerials.json';
import recommendedAnime from 'data/serial/recommendedAnime.json';
import recommendedCartoonSeries from 'data/serial/recommendedCartoonSeries.json';
import logo from 'data/images/logo.png';

const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const SerialDetails = lazy(() => import('../../pages/SerialDetails'));

export const App = () => {
  const [language, setLanguage] = useState('uk-UA');

  const location = useLocation();
  let movieLock;
  if (location.pathname.startsWith('/movies')) {
    movieLock = true;
  }
  let serialLock;
  if (location.pathname.startsWith('/serials')) {
    serialLock = true;
  }

  return (
    <div className={css.Container}>
      <header>
        <nav>
          <NavLink to="/">
            <img className={css.Logo} src={logo} alt=""></img>
          </NavLink>
          <NavLink
            to="/movies/trending"
            style={{
              background: movieLock ? '#be4040' : '',
            }}
          >
            Фільми
          </NavLink>
          <NavLink
            to="/serials/trending"
            style={{
              background: serialLock ? '#be4040' : '',
            }}
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
        <Suspense>
          <Routes>
            <Route path="/" element={<Home language={language} />}>
              <Route
                path="recommended-movies"
                element={
                  <RecommendedMovies
                    language={language}
                    ids={recommendedMovies}
                    header="Рекомендовані фільми"
                  />
                }
              />
              <Route
                path="recommended-cartoons"
                element={
                  <RecommendedMovies
                    language={language}
                    ids={recommendedCartoons}
                    header="Рекомендовані мултфільми"
                  />
                }
              />
              <Route
                path="recommended-serials"
                element={
                  <RecommendedSerials
                    language={language}
                    ids={recommendedSerials}
                    header="Рекомендовані серіали"
                  />
                }
              />
              <Route
                path="recommended-cartoon-series"
                element={
                  <RecommendedSerials
                    language={language}
                    ids={recommendedCartoonSeries}
                    header="Рекомендовані мультсеріали"
                  />
                }
              />
              <Route
                path="recommended-anime"
                element={
                  <RecommendedSerials
                    language={language}
                    ids={recommendedAnime}
                    header="Рекомендовані аніме"
                  />
                }
              />
            </Route>

            <Route path="/movies" element={<Movies language={language} />}>
              <Route
                path="filter"
                element={<MovieFilter language={language} />}
              />
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
              <Route
                path="filter"
                element={<SerialFilter language={language} />}
              />
              <Route
                path="search"
                element={<SerialSearch language={language} />}
              />
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
