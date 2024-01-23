import axios from 'axios';

const apiKey = 'dcd0358c9111c36efd1d7f445bdeffdd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
    params: {
        api_key: apiKey,
        language: 'uk-UA',
    },
};

// MOVIES
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

// SERIALS
export const fetchTrendingSerials = async () => {
    const response = await axios.get(`trending/tv/day`, params);
    return response.data.results;
};
export const fetchSerialDetails = async id => {
    const response = await axios.get(`/tv/${id}`, params);
    return response.data;
};
export const fetchSerialCast = async id => {
    const response = await axios.get(`tv/${id}/credits?`, params);
    return response.data.cast;
};
export const fetchSerialReviews = async id => {
    const response = await axios.get(`tv/${id}/reviews?`, params);
    return response.data.results;
};
export const fetchPopularSerials = async () => {
    const response = await axios.get(`/tv/popular`, params);
    return response.data.results;
};

