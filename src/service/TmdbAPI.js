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
    const response = await axios.get(`trending/movie/week?${language}`, params);
    return response.data.results;
};
export const fetchMovieDetails = async (id, language) => {
    const response = await axios.get(`/movie/${id}?${language}`, params);
    return response.data;
};
export const fetchMovieCast = async id => {
    const response = await axios.get(`movie/${id}/credits?language=en-US`, params);
    return response.data.cast;
};
export const fetchMovieReviews = async id => {
    const response = await axios.get(`movie/${id}/reviews?language=en-US`, params);
    return response.data.results;
};
export const searchMovies = async (name, language) => {
    const response = await axios.get(`/search/movie?query=${name}&${language}`, params);
    return response.data.results;
};
// export const fetchMovieVideos = async id => {
//     const response = await axios.get(`/movie/${id}/videos?language=uk-UA`, params);
//     console.log(response.data.results)
//     return response.data.results;
// };

// SERIALS
export const fetchTrendingSerials = async (language) => {
    const response = await axios.get(`trending/tv/week?${language}`, params);
    return response.data.results;
};
export const fetchSerialDetails = async (id, language) => {
    const response = await axios.get(`/tv/${id}?${language}`, params);
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
export const searchSerials = async (name, language) => {
    const response = await axios.get(`/search/tv?query=${name}&${language}`, params);
    return response.data.results;
};
// export const fetchPopularSerials = async (language) => {
//     const response = await axios.get(`/tv/popular?${language}`, params);
//     return response.data.results;
// };

