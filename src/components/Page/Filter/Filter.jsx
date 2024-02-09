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
import { FilterItemId, FilterItemParam, FilterItemParams } from './FilterItem';
import { PageNumber } from '../PageNumber/PageNumber';

export const FilterSection = ({ language }) => {
  const [genres, setGenres] = useState([]);
  const [data, setData] = useState([]);

  const [genre, setGenre] = useState('');
  const [genreName, setGenreName] = useState('');
  const genreParam = `&with_genres=${genre}`;

  const [country, setCountry] = useState('');
  const [countryName, setCountryName] = useState('');
  const countryParam = `&with_origin_country=${country}`;

  const [company, setCompany] = useState('');
  const [companyName, setCompanyName] = useState('');
  const companyParam = `&with_companies=${company}`;

  const [year1, setYear1] = useState('');
  const [year2, setYear2] = useState('');
  const [yearName, setYearName] = useState('');
  const yearParam = `&primary_release_date.gte=${year1}&primary_release_date.lte=${year2}`;

  const [rating1, setRating1] = useState('');
  const [rating2, setRating2] = useState('');
  const [ratingName, setRatingName] = useState('');
  const ratingParam = `&vote_average.gte=${rating1}&vote_average.lte=${rating2}`;

  const [sort, setSort] = useState('');
  const [sortName, setSortName] = useState('');
  const sortParam = `&sort_by=${sort}`;

  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  if (totalResults > 200) setTotalResults('500+');

  const choiceFilter = (item, name, setFilter, setFilterName) => {
    setFilter(item);
    setFilterName(name);
  };

  const choiceGenre = (item, name) =>
    choiceFilter(item, name, setGenre, setGenreName);

  const choiceCountry = (item, name) =>
    choiceFilter(item, name, setCountry, setCountryName);

  const choiceCompany = (item, name) =>
    choiceFilter(item, name, setCompany, setCompanyName);

  const choiceYear = (item1, item2, name) => {
    choiceFilter(item1, name, setYear1, setYearName);
    choiceFilter(item2, name, setYear2, setYearName);
  };

  const choiceRating = (item1, item2, name) => {
    choiceFilter(item1, name, setRating1, setRatingName);
    choiceFilter(item2, name, setRating2, setRatingName);
  };

  const choiceSort = (item, name) =>
    choiceFilter(item, name, setSort, setSortName);

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

  useEffect(() => {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }, [
    genreParam,
    countryParam,
    companyParam,
    yearParam,
    ratingParam,
    sortParam,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 540, behavior: 'smooth' });
  }, [page]);

  const deleteFilter = (setFilterName, setFilter, setFilter2) => {
    setFilterName('');
    setFilter('');
    if (setFilter2) setFilter2('');
  };

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
        <div>
          <header className={css.Title}>
            <h2>Жанр</h2>
            {genreName && (
              <span>
                {genreName}
                <button onClick={() => deleteFilter(setGenreName, setGenre)}>
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemId
            data={genres}
            choiceFilter={choiceGenre}
            filter={genre}
          />
        </div>
        <div>
          <header className={css.Title}>
            <h2>Рік</h2>
            {yearName && (
              <span>
                {yearName}
                <button
                  onClick={() => deleteFilter(setYearName, setYear1, setYear2)}
                >
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemParams
            data={years}
            choiceFilter={choiceYear}
            filter1={year1}
          />
        </div>
        <div>
          <header className={css.Title}>
            <h2>Компанія</h2>
            {companyName && (
              <span>
                {companyName}
                <button
                  onClick={() => deleteFilter(setCompanyName, setCompany)}
                >
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemParam
            data={companies}
            choiceFilter={choiceCompany}
            filter={company}
          />
        </div>
        <div>
          <header className={css.Title}>
            <h2>Країна</h2>
            {countryName && (
              <span>
                {countryName}
                <button
                  onClick={() => deleteFilter(setCountryName, setCountry)}
                >
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemParam
            data={countries}
            choiceFilter={choiceCountry}
            filter={country}
          />
        </div>
        <div>
          <header className={css.Title}>
            <h2>Рейтинг</h2>
            {ratingName && (
              <span>
                {ratingName}
                <button
                  onClick={() =>
                    deleteFilter(setRatingName, setRating1, setRating2)
                  }
                >
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemParams
            data={ratings}
            choiceFilter={choiceRating}
            filter1={rating1}
          />
        </div>
        <div>
          <header className={css.Title}>
            <h2>Сортувати</h2>
            {sortName && (
              <span>
                {sortName}
                <button onClick={() => deleteFilter(setSortName, setSort)}>
                  X
                </button>
              </span>
            )}
          </header>
          <FilterItemParam
            data={sorting}
            choiceFilter={choiceSort}
            filter={sort}
          />
        </div>
      </section>

      {selected && data.length > 0 && (
        <>
          <span>Знайдено фільмів {totalResults}</span>
          <List data={data} path="movies" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};
