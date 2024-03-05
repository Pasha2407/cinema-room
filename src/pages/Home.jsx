import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/Page/Page.module.css';
import { Suspense } from 'react';

export const Home = () => {
  return (
    <div className={css.Container}>
      <header>
        <h2>Cinema Room</h2>
      </header>
      <div className={css.Buttons}>
        <section>
          <div>
            <NavLink
              to="recommended-movies"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Фільми
            </NavLink>
            <NavLink
              to="recommended-cartoons"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Мульфільми
            </NavLink>
          </div>
        </section>
        <section>
          <div>
            <NavLink
              to="recommended-serials"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Серіали
            </NavLink>
            <NavLink
              to="recommended-cartoon-series"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Мультсеріали
            </NavLink>
            <NavLink
              to="recommended-anime"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Аніме
            </NavLink>
          </div>
        </section>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
