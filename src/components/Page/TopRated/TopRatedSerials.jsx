import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchTopRatedSerials } from 'service/api';
import { List } from 'components/List/List';
import { PageNumber } from '../PageNumber/PageNumber';
import { Loader } from 'components/Loader/Loader';

export const TopRatedSerials = ({ language }) => {
  const [isLoading, setIsLoading] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const result = await fetchTopRatedSerials(language, page);
        setData(result.results);
        setTotalPages(result.total_pages);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };
    fetchSerials();
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [language, page, searchParams, setSearchParams]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <List header="Топ рейтинга" page={page} data={data} path="serials" />
      <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};
