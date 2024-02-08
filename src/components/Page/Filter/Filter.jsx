import { useEffect, useState } from 'react';
import css from './Filter.module.css';

import { fetchMovieGenres } from 'service/tmdbAPI';
import countries from 'data/countries.json';
import companies from 'data/companies.json';
import years from 'data/years.json';
import ratings from 'data/ratings.json';
import sorting from 'data/sorting.json';
import { MovieDiscover } from 'service/tmdbAPI';
import { List } from 'components/List/List';
import { PageNumber } from '../PageNumber/PageNumber';

export const FilterSection = ({ language }) => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);

  const [genre, setGenre] = useState('0');
  const genreParam = `&with_genres=${genre}`;

  const [country, setCountry] = useState('0');
  const countryParam = `&with_origin_country=${country}`;

  const [company, setCompany] = useState('0');
  const companyParam = `&with_companies=${company}`;

  const [year1, setYear1] = useState('f');
  const [year2, setYear2] = useState('f');
  const yearParam = `&primary_release_date.gte=${year1}&primary_release_date.lte=${year2}`;

  const [rating1, setRating1] = useState('f');
  const [rating2, setRating2] = useState('f');
  const ratingParam = `&vote_average.gte=${rating1}&vote_average.lte=${rating2}`;

  const [sort, setSort] = useState('0');
  const sortParam = `&sort_by=${sort}`;

  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  if (totalResults > 200) setTotalResults('500+');

  const choiceGenre = item => {
    if (item === genre) setGenre('');
    else setGenre(item);

    if (country === '0') setCountry('');
    if (company === '0') setCompany('');
    if (year1 === 'f') setYear1('');
    if (year2 === 'f') setYear2('');
    if (rating1 === 'f') setRating1('');
    if (rating2 === 'f') setRating2('');
    if (sort === '0') setSort('');
  };

  const choiceCountry = item => {
    if (item === country) setCountry('');
    else setCountry(item);

    if (genre === '0') setGenre('');
    if (company === '0') setCompany('');
    if (year1 === 'f') setYear1('');
    if (year2 === 'f') setYear2('');
    if (rating1 === 'f') setRating1('');
    if (rating2 === 'f') setRating2('');
    if (sort === '0') setSort('');
  };

  const choiceCompany = item => {
    if (item === company) setCompany('');
    else setCompany(item);

    if (genre === '0') setGenre('');
    if (country === '0') setCountry('');
    if (year1 === 'f') setYear1('');
    if (year2 === 'f') setYear2('');
    if (rating1 === 'f') setRating1('');
    if (rating2 === 'f') setRating2('');
    if (sort === '0') setSort('');
  };

  const choiceYear = (item1, item2) => {
    if (item1 === year1) setYear1('');
    else setYear1(item1);

    if (item2 === year2) setYear2('');
    else setYear2(item2);

    if (genre === '0') setGenre('');
    if (country === '0') setCountry('');
    if (company === '0') setCompany('');
    if (rating1 === 'f') setRating1('');
    if (rating2 === 'f') setRating2('');
    if (sort === '0') setSort('');
  };

  const choiceRating = (item1, item2) => {
    if (item1 === rating1) setRating1('');
    else setRating1(item1);

    if (item2 === rating2) setRating2('');
    else setRating2(item2);

    if (genre === '0') setGenre('');
    if (country === '0') setCountry('');
    if (company === '0') setCompany('');
    if (year1 === 'f') setYear1('');
    if (year2 === 'f') setYear2('');
    if (sort === '0') setSort('');
  };

  const choiceSort = item => {
    if (item === sort) setSort('');
    else setSort(item);

    if (genre === '0') setGenre('');
    if (country === '0') setCountry('');
    if (company === '0') setCompany('');
    if (year1 === 'f') setYear1('');
    if (year2 === 'f') setYear2('');
    if (rating1 === 'f') setRating1('');
    if (rating2 === 'f') setRating2('');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await fetchMovieGenres(language);
        setGenres(result);

        const movies = await MovieDiscover(
          language,
          genreParam,
          countryParam,
          companyParam,
          yearParam,
          ratingParam,
          sortParam,
          page
        );
        setData(movies.results);
        setTotalPages(movies.total_pages);
        setTotalResults(movies.total_results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [
    language,
    genreParam,
    countryParam,
    companyParam,
    yearParam,
    ratingParam,
    sortParam,
    page,
  ]);

  let selected = false;
  if (
    genre ||
    country ||
    company ||
    year1 ||
    year2 ||
    rating1 ||
    rating2 ||
    sort
  )
    selected = true;

  return (
    <div>
      <section className={css.Container}>
        <ul>
          {genres.map(item => (
            <li
              key={item.id}
              onClick={() => choiceGenre(item.id)}
              style={{
                backgroundColor: genre === item.id && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul>
          {countries.map(item => (
            <li
              key={item.id}
              onClick={() => choiceCountry(item.param)}
              style={{
                backgroundColor: country === item.param && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul>
          {companies.map(item => (
            <li
              key={item.id}
              onClick={() => choiceCompany(item.param)}
              style={{
                backgroundColor: company === item.param && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul>
          {years.map(item => (
            <li
              key={item.id}
              onClick={() => choiceYear(item.param1, item.param2)}
              style={{
                backgroundColor: year1 === item.param1 && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul>
          {ratings.map(item => (
            <li
              key={item.id}
              onClick={() => choiceRating(item.param1, item.param2)}
              style={{
                backgroundColor: rating1 === item.param1 && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul>
          {sorting.map(item => (
            <li
              key={item.id}
              onClick={() => choiceSort(item.param)}
              style={{
                backgroundColor: sort === item.param && '#be4040',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </section>

      {selected && data.length > 0 && (
        <>
          <span>Знайдено фільмів {totalResults}</span>
          <List header="Фільми за жанром і країною" data={data} path="movies" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};
