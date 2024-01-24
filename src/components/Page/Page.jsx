import css from './Page.module.css';
import { List } from 'components/List/List';

export const Page = ({ data, path }) => {
  return (
    <div className={css.Container}>
      <h2>Trending movies today</h2>
      <List data={data} path={path} />
    </div>
  );
};
