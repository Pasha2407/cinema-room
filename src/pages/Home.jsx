import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/Page/Page.module.css';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 450 }) ? true : false;
  return (
    <div className={css.Container}>
      <header>
        <h2>Вітаємо в Cinema Room</h2>
        <p>
          Тут ви зможете знайти для себе фільм або серіал для перегляду<br></br>
          в вкладках Фільми та Серіали відповідно, або можете ознайомитись з
          авторським списком<br></br>
          рекомендованих фільмів та серіалів
        </p>
        <h2>Авторський список рекомендованих фільмів та серіалів</h2>
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
            {isMobile && (
              <>
                <br></br>
                <br></br>
              </>
            )}
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
