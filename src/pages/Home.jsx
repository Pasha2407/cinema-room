import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/Page/StyledPage/HomePage.module.css';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className={css.Container}>
      <header>
        <h2>{t('home.header')}</h2>
        <i>{t('home.title')}</i>
      </header>
      <section className={css.Buttons}>
        <div>
          <NavLink
            to="recommended-movies"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            {t('home.movies')}
          </NavLink>
          <NavLink
            to="recommended-cartoons"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            {t('home.mult')}
          </NavLink>
        </div>
        <div>
          <NavLink
            to="recommended-serials"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            {t('home.serials')}
          </NavLink>
          <NavLink
            to="recommended-cartoon-series"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            {t('home.mults')}
          </NavLink>
          <NavLink
            to="recommended-anime"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            {t('home.anime')}
          </NavLink>
        </div>
      </section>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
