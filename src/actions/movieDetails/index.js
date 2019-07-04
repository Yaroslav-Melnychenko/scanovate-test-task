import { GET_MOVIE_DETAILS_URL } from '../../constants/apiUrl';
import axios from 'axios';


const getMovieDetailsRequest = payload => ({
	type: 'GET_MOVIE_DETAILS_REQUEST',
	payload,
});

const getMovieDetailsRequestSuccess = payload => ({
	type: 'GET_MOVIE_DETAILS_REQUEST_SUCCESS',
	payload,
});

const getMovieDetailsRequestError = payload => ({
	type: 'GET_MOVIE_DETAILS_REQUEST_ERROR',
	payload,
});

export const getMovieDetails = (id) => dispatch => {
	dispatch(getMovieDetailsRequest());
	return axios.get(GET_MOVIE_DETAILS_URL(id))
		.then(response => dispatch(getMovieDetailsRequestSuccess(response)))
		.catch(err => {
			dispatch(getMovieDetailsRequestError());
			return err.response;
		});
};
