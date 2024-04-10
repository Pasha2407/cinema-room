import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { searchSerials } from 'service/api';
import { List } from 'components/List/List';
import { Loader } from 'components/Loader/Loader';
import css from './Search.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { PageNumber } from '../PageNumber/PageNumber';

export const SerialSearch = ({ language }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serialName = searchParams.get('query') || '';
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState();

  const [foundSerials, setFoundSerials] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const [page, setPage] = useState(currentPage);

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
        const serials = await searchSerials(serialName, language, page);
        setFoundSerials(serials.results);
        setTotalPages(serials.total_pages);
        setTotalResults(serials.total_results);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    search();
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [serialName, language, page, searchParams, setSearchParams]);

  return (
    <div>
      <div className={css.SearchForm}>
        <h3>{t('search.serials.title')}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('search.placeholder')}
            name="search"
          />
          <button type="submit" onClick={() => setPage(1)}>
            <IconContext.Provider value={{ size: 25, color: '#be4040' }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
      {isLoading && serialName && <Loader />}

      {!isLoading && foundSerials.length > 0 && (
        <>
          <h2 className={css.ListHeader}>
            {t('search.serials.request')} " {serialName} "
          </h2>
          <span>
            {t('search.serials.result')} {totalResults}&emsp;{t('general.page')}{' '}
            {page}
          </span>
          <List data={foundSerials} path="serials" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}

      {foundSerials.length === 0 && !isLoading && serialName && (
        <i className={css.NotFound}>
          {t('search.serials.requests')} " {serialName} " {t('search.not')}
        </i>
      )}
    </div>
  );
};
