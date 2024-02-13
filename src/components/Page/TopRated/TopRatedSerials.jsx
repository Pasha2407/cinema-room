import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchTopRatedSerials } from 'service/api';
import { List } from 'components/List/List';
import { PageNumber } from '../PageNumber/PageNumber';

export const TopRatedSerials = ({ language }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchSerials = async () => {
      try {
        const result = await fetchTopRatedSerials(language, page);
        setData(result.results);
        setTotalPages(result.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSerials();
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [language, page, searchParams, setSearchParams]);

  return (
    <div>
      <List header="Топ рейтинга" data={data} path="serials" />
      <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};
