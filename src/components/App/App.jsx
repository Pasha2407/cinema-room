import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';
import { Home } from 'pages/Home/Home';
import { Serials } from 'pages/Serials/Serials';
import { Movies } from 'pages/Movies/Movies';
import SerialDetails from 'pages/SerialDetails/SerialDetails';

const Search = lazy(() => import('../../pages/Search/Search'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
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
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/serials" element={<Serials />} />
            <Route path="/serials/:id" element={<SerialDetails />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
