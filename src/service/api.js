import axios from 'axios';

const apiKey = 'dcd0358c9111c36efd1d7f445bdeffdd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
    params: {
        api_key: apiKey,
        language: 'en-US',
    },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
};

export const fetchMovieDetails = async id => {
    const response = await axios.get(`/movie/${id}`, params);
    return response.data;
};

export const fetchMovieCast = async id => {
    const response = await axios.get(`movie/${id}/credits?`, params);
    return response.data.cast;
};

export const fetchMovieReviews = async id => {
    const response = await axios.get(`movie/${id}/reviews?`, params);
    return response.data.results;
};

export const searchMovies = async name => {
    const response = await axios.get(`/search/movie?query=${name}`, params);
    return response.data.results;
};