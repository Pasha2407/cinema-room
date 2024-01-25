import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { fetchMovieDetails } from '../service/API';

import { Details } from 'components/Details/Details';
import availableMovies from 'data/availableMovies.json';

const MovieDetails = ({ language }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  const back = useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(id, language);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    };
    movieDetails();
  }, [id, language]);

  return isLoading ? (
    <Loader />
  ) : (
    <Details
      data={movieDetails}
      back={back}
      id={id}
      availableId={availableMovies}
    />
  );
};

export default MovieDetails;