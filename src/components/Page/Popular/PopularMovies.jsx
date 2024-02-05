import { useEffect, useState } from 'react';

import { fetchPopularMovies } from 'service/tmdbAPI';
import { List } from 'components/List/List';
import { PageNumber } from '../PageNumber/PageNumber';

export const PopularMovies = ({ language }) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchMovies = async () => {
      try {
        const result = await fetchPopularMovies(language, page);
        setData(result.results);
        setTotalPages(result.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [language, page]);

  return (
    <div>
      <List header="Популярні" data={data} path="movies" />
      <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};
