import { Suspense, lazy, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import css from './App.module.css';

import { Home } from 'pages/Home';
import { Serials } from 'pages/Serials';
import { Movies } from 'pages/Movies';

import languages from 'data/languages.json';

const Search = lazy(() => import('../../pages/Search/Search'));

const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const SerialDetails = lazy(() => import('../../pages/SerialDetails'));

const MovieCast = lazy(() => import('../Cast/MovieCast'));
const MovieReviews = lazy(() => import('../Reviews/MovieReviews'));
const SerialCast = lazy(() => import('../Cast/SerialCast'));
const SerialReviews = lazy(() => import('../Reviews/SerialReviews'));

export const App = () => {
  const [language, setLanguage] = useState(languages.UA);

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
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            Movies
          </NavLink>
          <NavLink
            to="/serials"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            Serials
          </NavLink>
          <NavLink
            to="/search"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
          >
            Search
          </NavLink>
          <button onClick={() => setLanguage(languages.UA)}>UA</button>
          <button onClick={() => setLanguage(languages.EN)}>EN</button>
          <button onClick={() => setLanguage(languages.CZ)}>CZ</button>
          <button onClick={() => setLanguage(languages.RU)}>RU</button>
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

            <Route
              path="/movies"
              element={<Movies language={language} path="movies" />}
            />
            <Route
              path="/serials"
              element={<Serials language={language} path="serials" />}
            />
            <Route
              path="/search"
              element={<Search language={language} path="movies" />}
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
