export const GET_MOVIE_LIST_URL = `${process.env.REACT_APP_BASE_URL_REMOTE}/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`;
export const GET_MOVIE_IMAGE_URL = process.env.REACT_APP_IMG_URL_REMOTE;
export const GET_MOVIE_DETAILS_URL = (id) => `${process.env.REACT_APP_BASE_URL_REMOTE}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`