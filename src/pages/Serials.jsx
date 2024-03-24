import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import css from '../components/Page/StyledPage/Page.module.css';

export const Serials = () => {
  const isMobile = useMediaQuery({ maxWidth: 450 }) ? true : false;
  return (
    <div className={css.Container}>
      <div className={css.Buttons}>
        <section>
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
            {!isMobile && (
              <>
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
              </>
            )}
          </div>
        </section>
        {isMobile && (
          <section>
            <div>
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
        )}
        <section>
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
