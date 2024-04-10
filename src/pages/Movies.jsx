import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import css from '../components/Page/StyledPage/Page.module.css';

export const Movies = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 }) ? true : false;
  const { t } = useTranslation();
  return (
    <div className={css.Container}>
      <div className={css.Buttons}>
        <section>
          <h2>{t('main.category')}</h2>
          <div>
            <NavLink
              to="trending"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.trend')}
            </NavLink>
            {!isMobile && (
              <>
                <NavLink
                  to="popular"
                  style={({ isActive }) => ({
                    background: isActive ? '#be4040' : '#313131',
                  })}
                >
                  {t('main.popular')}
                </NavLink>
                <NavLink
                  to="top-rated"
                  style={({ isActive }) => ({
                    background: isActive ? '#be4040' : '#313131',
                  })}
                >
                  {t('main.top')}
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
                {t('main.popular')}
              </NavLink>
              <NavLink
                to="top-rated"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                {t('main.top')}
              </NavLink>
            </div>
          </section>
        )}
        <section>
          <h2>{t('main.management')}</h2>
          <div>
            <NavLink
              to="search"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.search')}
            </NavLink>
            <NavLink
              to="filter"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.filter')}
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
