import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchSerials } from 'service/tmdbAPI';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const SerialSearch = ({ data, path, language }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundSerials, setFoundSerials] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const serialName = searchParams.get('query') || '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.search.value.toLowerCase();
    if (query.trim() === '') return alert('Can not be empty');
    setSearchParams({ query });
    event.target.reset();
  };

  useEffect(() => {
    const search = async () => {
      try {
        setIsLoading(true);
        const serials = await searchSerials(serialName, language);
        setFoundSerials(serials);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    search();
  }, [serialName, language]);

  return (
    <div>
      <div className={css.SearchForm}>
        <h3>Пошук Серіалів</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="шукайте серіали будь якою мовою"
            name="search"
          />
          <button type="submit">
            <IconContext.Provider value={{ size: 25, color: '#be4040' }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      {isLoading && serialName && <Loader />}

      {!isLoading && foundSerials.length > 0 && (
        <>
          <div className={css.CancelButton}>
            <Link to="/serials">Скинути</Link>
          </div>
          <h2 className={css.ListHeader}>Серіали по запиту " {serialName} "</h2>
          <List data={foundSerials} path={path} />
        </>
      )}

      {!serialName && (
        <>
          <h2 className={css.ListHeader}>Зараз в тренді</h2>
          <List data={data} path={path} />
        </>
      )}
      {foundSerials.length === 0 && !isLoading && serialName && (
        <i className={css.NotFound}>
          Серіалів по запиту " {serialName} " не знайдено
        </i>
      )}
    </div>
  );
};

export default SerialSearch;
