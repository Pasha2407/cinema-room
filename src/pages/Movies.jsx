import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import css from '../components/Page/Page.module.css';

export const Movies = () => {
  return (
    <div className={css.Container}>
      <div className={css.Buttons}>
        <section>
          <h2>Категорії:</h2>
          <div>
            <Link to="trending">Зараз в тренді</Link>
            <Link to="popular">Популярні</Link>
            <Link to="top-rated">Топ рейтинга</Link>
          </div>
        </section>
        <section>
          <h2>Управління:</h2>
          <div>
            <Link to="search">Пошук</Link>
            <Link to="filter">Фільтер</Link>
          </div>
        </section>
      </div>

      <Suspense
        fallback={
          <p style={{ paddingLeft: 30 }}>
            <i>Loading...</i>
          </p>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
