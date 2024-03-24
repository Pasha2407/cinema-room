import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/Page/StyledPage/HomePage.module.css';
import { Suspense } from 'react';

export const Home = () => {
  return (
    <div className={css.Container}>
      <header>
        <h2>Вітаємо в Cinema Room</h2>
        <p>
          Тут ви зможете знайти для себе фільм або серіал для перегляду в
          вкладках Фільми та Серіали відповідно,
          <br></br>або можете ознайомитись з авторським списком рекомендованих
          фільмів та серіалів
        </p>
      </header>
      <section className={css.Buttons}>
        <div>
          <NavLink
            to="recommended-movies"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            Рекомендовані фільми
          </NavLink>
          <NavLink
            to="recommended-cartoons"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            Рекомендовані мульфільми
          </NavLink>
        </div>
        <div>
          <NavLink
            to="recommended-serials"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            Рекомендовані серіали
          </NavLink>
          <NavLink
            to="recommended-cartoon-series"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            Рекомендовані мультсеріали
          </NavLink>
          <NavLink
            to="recommended-anime"
            style={({ isActive }) => ({
              background: isActive ? '#be4040' : '#313131',
            })}
          >
            Рекомендовані аніме
          </NavLink>
        </div>
      </section>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
