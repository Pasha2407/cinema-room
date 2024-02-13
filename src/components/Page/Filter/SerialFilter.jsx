import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './Filter.module.css';

import serialGenres from 'data/serialGenres.json';
import countries from 'data/countries.json';
import companies from 'data/companies.json';
import years from 'data/years.json';
import ratings from 'data/ratings.json';
import sorting from 'data/sorting.json';

import { SerialDiscover } from 'service/tmdbAPI';

import { List } from 'components/List/List';
import { FilterItemParam, FilterItemParams } from './FilterItem';
import { PageNumber } from '../PageNumber/PageNumber';

export const SerialFilter = ({ language }) => {
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
    searchParams.set('y1', year1);
    searchParams.set('y2', year2);
    searchParams.set('c', company);
    searchParams.set('ct', country);
    searchParams.set('r1', rating1);
    searchParams.set('r2', rating2);
    searchParams.set('s', sort);
    searchParams.set('gn', genreName);
    searchParams.set('yn', yearName);
    searchParams.set('cn', companyName);
    searchParams.set('ctn', countryName);
    searchParams.set('rn', ratingName);
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
        <FilterItemParam
          header="Жанр"
          filterName={genreName}
          deleteFilter={deleteFilter}
          setFilterName={setGenreName}
          setFilter={setGenre}
          data={serialGenres}
          choiceFilter={choiceGenre}
          filter={genre}
        />
        <FilterItemParams
          header="Рік"
          filterName={yearName}
          deleteFilter={deleteFilter}
          setFilterName={setYearName}
          setFilter1={setYear1}
          setFilter2={setYear2}
          data={years}
          choiceFilter={choiceYear}
          filter={year1}
        />
        <FilterItemParam
          header="Компанія"
          filterName={companyName}
          deleteFilter={deleteFilter}
          setFilterName={setCompanyName}
          setFilter={setCompany}
          data={companies}
          choiceFilter={choiceCompany}
          filter={company}
        />
        <FilterItemParam
          header="Країна"
          filterName={countryName}
          deleteFilter={deleteFilter}
          setFilterName={setCountryName}
          setFilter={setCountry}
          data={countries}
          choiceFilter={choiceCountry}
          filter={country}
        />
        <FilterItemParams
          header="Рейтинг"
          filterName={ratingName}
          deleteFilter={deleteFilter}
          setFilterName={setRatingName}
          setFilter1={setRating1}
          setFilter2={setRating2}
          data={ratings}
          choiceFilter={choiceRating}
          filter={rating1}
        />
        <FilterItemParam
          header="Сортувати"
          filterName={sortName}
          deleteFilter={deleteFilter}
          setFilterName={setSortName}
          setFilter={setSort}
          data={sorting}
          choiceFilter={choiceSort}
          filter={sort}
        />
      </section>

      {data.length > 0 && (
        <>
          {selected ? (
            <span>Знайдено серіалів {totalResults}</span>
          ) : (
            <span>Всього серіалів {totalResults}</span>
          )}

          <List data={data} path="serials" />
          <PageNumber totalPages={totalPages} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};
