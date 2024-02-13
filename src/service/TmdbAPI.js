import axios from 'axios';

const apiKey = 'dcd0358c9111c36efd1d7f445bdeffdd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
    params: {
        api_key: apiKey,
    },
};

// MOVIES
export const fetchTrendingMovies = async (language) => {
    const response = await axios.get(`trending/movie/week?language=${language}`, params);
    return response.data.results;
};
export const fetchPopularMovies = async (language, page) => {
    const response = await axios.get(`movie/popular?language=${language}&page=${page}`, params);
    return response.data;
};
export const fetchTopRatedMovies = async (language, page) => {
    const response = await axios.get(`movie/top_rated?language=${language}&page=${page}`, params);
    return response.data;
};

export const fetchMovieDetails = async (id, language) => {
    const response = await axios.get(`/movie/${id}?language=${language}`, params);
    return response.data;
};
export const fetchMovieVideos = async (id, language) => {
    const response = await axios.get(`/movie/${id}/videos?language=${language}`, params);
    return response.data.results;
};
export const fetchMovieCast = async id => {
    const response = await axios.get(`movie/${id}/credits?language=en-US`, params);
    return response.data.cast;
};
export const fetchMovieReviews = async id => {
    const response = await axios.get(`movie/${id}/reviews?language=en-US`, params);
    return response.data.results;
};

export const searchMovies = async (name, language, page) => {
    const response = await axios.get(`/search/movie?query=${name}&language=${language}&page=${page}`, params);
    return response.data;
};

export const MovieDiscover = async (language, genreParam, countryParam, companyParam, yearParam, ratingParam, sortParam, page) => {
    const response = await axios.get(
        `discover/movie?language=${language}${genreParam}${countryParam}${companyParam}${yearParam}${ratingParam}${sortParam}&page=${page}`, params);
    return response.data;
};




// SERIALS
export const fetchTrendingSerials = async (language) => {
    const response = await axios.get(`trending/tv/week?language=${language}`, params);
    return response.data.results;
};
export const fetchPopularSerials = async (language, page) => {
    const response = await axios.get(`/tv/popular?language=${language}&page=${page}`, params);
    return response.data;
};
export const fetchTopRatedSerials = async (language, page) => {
    const response = await axios.get(`tv/top_rated?language=${language}&page=${page}`, params);
    return response.data;
};

export const fetchSerialDetails = async (id, language) => {
    const response = await axios.get(`/tv/${id}?language=${language}`, params);
    return response.data;
};
export const fetchSerialCast = async id => {
    const response = await axios.get(`tv/${id}/credits?language=en-US`, params);
    return response.data.cast;
};
export const fetchSerialReviews = async id => {
    const response = await axios.get(`tv/${id}/reviews?language=en-US`, params);
    return response.data.results;
};

export const searchSerials = async (name, language, page) => {
    const response = await axios.get(`/search/tv?query=${name}&language=${language}&page=${page}`, params);
    return response.data;
};

export const SerialDiscover = async (language, genreParam, countryParam, companyParam, yearParam, ratingParam, sortParam, page) => {
    const response = await axios.get(
        `discover/tv?language=${language}${genreParam}${countryParam}${companyParam}${yearParam}${ratingParam}${sortParam}&page=${page}`, params);
    return response.data;
};
