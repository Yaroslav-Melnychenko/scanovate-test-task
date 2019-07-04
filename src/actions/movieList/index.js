import { GET_MOVIE_LIST_URL } from '../../constants/apiUrl';
import axios from 'axios';


const getMovieListRequest = payload => ({
	type: 'GET_MOVIE_LIST_REQUEST',
	payload,
});

const getMovieListRequestSuccess = payload => ({
	type: 'GET_MOVIE_LIST_REQUEST_SUCCESS',
	payload,
});

const getMovieListRequestError = payload => ({
	type: 'GET_MOVIE_LIST_REQUEST_ERROR',
	payload,
});

export const getMovieList = (page = 1) => dispatch => {
	dispatch(getMovieListRequest());
	return axios.get(`${GET_MOVIE_LIST_URL}&page=${page}`)
		.then(response => dispatch(getMovieListRequestSuccess(response)))
		.catch(err => {
			dispatch(getMovieListRequestError());
			return err.response;
		});
};
