import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

import css from '../components/Page/StyledPage/Page.module.css';

export const Movies = () => {
  const isMobile = useMediaQuery({ maxWidth: 560 }) ? true : false;
  const isSmall = useMediaQuery({ maxWidth: 410 }) ? true : false;
  const { t } = useTranslation();
  return (
    <div className={css.Container}>
      <div className={css.ButtonsContainer}>
        <div className={css.Category}>
          {!isMobile && <h2>{t('main.category')}</h2>}
          <div>
            <NavLink
              to="trending"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.trend')}
            </NavLink>
          </div>
          <div>
            <NavLink
              to="popular"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.popular')}
            </NavLink>
          </div>
          {!isSmall && (
            <div>
              <NavLink
                to="top-rated"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                {t('main.top')}
              </NavLink>
            </div>
          )}
        </div>

        <div className={css.Management}>
          {!isMobile && <h2>{t('main.management')}</h2>}
          {isSmall && (
            <div>
              <NavLink
                to="top-rated"
                style={({ isActive }) => ({
                  background: isActive ? '#be4040' : '#313131',
                })}
              >
                {t('main.top')}
              </NavLink>
            </div>
          )}
          <div>
            <NavLink
              to="search"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.search')}
            </NavLink>
          </div>
          <div>
            <NavLink
              to="filter"
              style={({ isActive }) => ({
                background: isActive ? '#be4040' : '#313131',
              })}
            >
              {t('main.filter')}
            </NavLink>
          </div>
        </div>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
