import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './Filter.module.css';

import serialGenres from 'data/serial/genres.json';
import countries from 'data/serial/countries.json';
import companies from 'data/serial/companies.json';
import years from 'data/movie/years.json';
import ratings from 'data/movie/ratings.json';
import serialSorting from 'data/serial/sorting.json';

import { SerialDiscover } from 'service/api';

import { List } from 'components/List/List';
import { FilterItem } from './FilterItem';
import { PageNumber } from '../PageNumber/PageNumber';
import { Loader } from 'components/Loader/Loader';

export const SerialFilter = ({ language }) => {
  const [isLoading, setIsLoading] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState([]);

  const currentGenre = searchParams.get('g') || '';
  const [genre, setGenre] = useState(currentGenre);
  const currentGenreName = searchParams.get('gn') || '';
  const [genreName, setGenreName] = useState(currentGenreName);
  const genreParam = `&with_genres=${genre}`;

  const currentCountry = searchParams.get('ct') || '';
  const [country, setCountry] = useState(currentCountry);
  const currentCountryName = searchParams.get('ctn') || '';
  const [countryName, setCountryName] = useState(currentCountryName);
  const countryParam = `&with_origin_country=${country}`;

  const currentCompany = searchParams.get('c') || '';
  const [company, setCompany] = useState(currentCompany);
  const currentCompanyName = searchParams.get('cn') || '';
  const [companyName, setCompanyName] = useState(currentCompanyName);
  const companyParam = `&with_companies=${company}`;

  const currentYear1 = searchParams.get('y1') || '';
  const [year1, setYear1] = useState(currentYear1);
  const currentYear2 = searchParams.get('y2') || '';
  const [year2, setYear2] = useState(currentYear2);
  const currentYearName = searchParams.get('yn') || '';
  const [yearName, setYearName] = useState(currentYearName);
  const yearParam = `&first_air_date.gte=${year1}&first_air_date.lte=${year2}`;

  const currentRating1 = searchParams.get('r1') || '';
  const [rating1, setRating1] = useState(currentRating1);
  const currentRating2 = searchParams.get('r2') || '';
  const [rating2, setRating2] = useState(currentRating2);
  const currentRatingName = searchParams.get('rn') || '';
  const [ratingName, setRatingName] = useState(currentRatingName);
  const ratingParam = `&vote_average.gte=${rating1}&vote_average.lte=${rating2}`;

  const currentSort = searchParams.get('s') || '';
  const [sort, setSort] = useState(currentSort);
  const currentSortName = searchParams.get('sn') || '';
  const [sortName, setSortName] = useState(currentSortName);
  const sortParam = `&sort_by=${sort}`;

  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const [page, setPage] = useState(currentPage);

  const choiceFilter = (item, name, setFilter, setFilterName) => {
    setFilter(item);
    setPage(1);
    setFilterName(name);
  };

  const choiceGenre = (item, item2, name) =>
    choiceFilter(item, name, setGenre, setGenreName);

  const choiceCountry = (item, item2, name) =>
    choiceFilter(item, name, setCountry, setCountryName);

  const choiceCompany = (item, item2, name) =>
    choiceFilter(item, name, setCompany, setCompanyName);

  const choiceYear = (item, item2, name) => {
    choiceFilter(item, name, setYear1, setYearName);
    choiceFilter(item2, name, setYear2, setYearName);
  };

  const choiceRating = (item, item2, name) => {
    choiceFilter(item, name, setRating1, setRatingName);
    choiceFilter(item2, name, setRating2, setRatingName);
  };

  const choiceSort = (item, item2, name) =>
    choiceFilter(item, name, setSort, setSortName);

  useEffect(() => {
    setIsLoading(true);
    const fetchSerials = async () => {
      try {
        const serials = await SerialDiscover(
          language,
          genreParam,
          countryParam,
          companyParam,
          yearParam,
          ratingParam,
          sortParam,
          page
        );
        setData(serials.results);
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
    fetchSerials();
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
    searchParams.set('page', page);

    searchParams.set('g', genre);
    searchParams.set('gn', genreName);

    searchParams.set('y1', year1);
    searchParams.set('y2', year2);
    searchParams.set('yn', yearName);

    searchParams.set('c', company);
    searchParams.set('cn', companyName);

    searchParams.set('ct', country);
    searchParams.set('ctn', countryName);

    searchParams.set('r1', rating1);
    searchParams.set('r2', rating2);
    searchParams.set('rn', ratingName);

    searchParams.set('s', sort);
    searchParams.set('sn', sortName);
    setSearchParams(searchParams);
  }, [
    page,
    genre,
    year1,
    year2,
    company,
    country,
    rating1,
    rating2,
    sort,
    genreName,
    yearName,
    companyName,
    countryName,
    ratingName,
    sortName,
    searchParams,
    setSearchParams,
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
        <FilterItem
          header="Жанр"
          placeholder="Всі жанри"
          data={serialGenres}
          choiceFilter={choiceGenre}
          filterName={genreName}
        />
        <FilterItem
          header="Рік"
          placeholder="Всі роки"
          data={years}
          choiceFilter={choiceYear}
          filterName={yearName}
        />
        <FilterItem
          header="Компанія"
          placeholder="Всі компанії"
          data={companies}
          choiceFilter={choiceCompany}
          filterName={companyName}
        />
        <FilterItem
          header="Країна"
          placeholder="Всі країни"
          data={countries}
          choiceFilter={choiceCountry}
          filterName={countryName}
        />
        <FilterItem
          header="Рейтинг"
          placeholder="Будь який рейтинг"
          data={ratings}
          choiceFilter={choiceRating}
          filterName={ratingName}
        />
        <FilterItem
          header="Сортувати"
          placeholder="Від більшої популярності до меншої"
          data={serialSorting}
          choiceFilter={choiceSort}
          filterName={sortName}
        />
      </section>

      {isLoading && <Loader />}

      {!isLoading && totalResults > 0 && (
        <>
          {selected ? (
            <span>
              Знайдено серіалів: {totalResults}&emsp;Сторінка: {page}
            </span>
          ) : (
            <span>Всього серіалів: {totalResults}</span>
          )}

          <List data={data} path="serials" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}

      {!isLoading && totalResults === 0 && (
        <i className={css.NotFound}>Серіалів не знайдено</i>
      )}
    </div>
  );
};
