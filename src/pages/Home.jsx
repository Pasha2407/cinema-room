import css from '../components/Page/Page.module.css';

import { RecommendedSerials } from 'components/Page/Recommended/RecommendedSerials';
import recommendedSerials from 'data/serial/recommendedSerials.json';
import recommendedAnime from 'data/serial/recommendedAnime.json';
import recommendedCartoons from 'data/serial/recommendedCartoons.json';

export const Home = ({ language }) => {
  return (
    <div className={css.Container}>
      <header>
        <h2>Cinema Room</h2>
      </header>
      <section></section>
      <section>
        <RecommendedSerials
          ids={recommendedSerials}
          header="Рекомендовані серіали"
          language={language}
        />
        <RecommendedSerials
          ids={recommendedAnime}
          header="Рекомендовані аніме"
          language={language}
        />
        <RecommendedSerials
          ids={recommendedCartoons}
          header="Рекомендовані мультсеріали"
          language={language}
        />
      </section>
    </div>
  );
};
