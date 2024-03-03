import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from '../components/Page/Page.module.css';

export const Serials = () => {
  return (
    <div className={css.Container}>
      <div className={css.Buttons}>
        <section className={css.Category}>
          <h2>Категорії:</h2>
          <div>
            <NavLink
              to="trending"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Зараз в тренді
            </NavLink>
            <NavLink
              to="popular"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Популярні
            </NavLink>
            <NavLink
              to="top-rated"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Топ рейтинга
            </NavLink>
          </div>
        </section>
        <section className={css.Control}>
          <h2>Управління:</h2>
          <div>
            <NavLink
              to="search"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Пошук
            </NavLink>
            <NavLink
              to="filter"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              Фільтер
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
