import { Suspense, lazy, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import css from './App.module.css';

import { Home } from 'pages/Home';
import { Serials } from 'pages/Serials';
import { Movies } from 'pages/Movies';

import languages from 'data/languages.json';
import { Information } from 'pages/Information';

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
            CR
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '',
            })}
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
            <button onClick={() => setLanguage(languages.UA)}>UA</button>
            <button onClick={() => setLanguage(languages.EN)}>EN</button>
            <button onClick={() => setLanguage(languages.RU)}>RU</button>
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

            <Route
              path="/movies"
              element={<Movies language={language} path="movies" />}
            />
            <Route
              path="/serials"
              element={<Serials language={language} path="serials" />}
            />
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
