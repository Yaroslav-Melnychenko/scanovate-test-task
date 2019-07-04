import initialState from '../../store/initialState';

export default (state = initialState.movieList, { type, payload }) => {
	switch (type) {
		case 'GET_MOVIE_LIST_REQUEST': {
			return { ...state, isFetching: true };
		}
		case 'GET_MOVIE_LIST_REQUEST_SUCCESS': {
      const { data } = payload;
			return { ...state, isFetching: false, data };
		}

		case 'GET_MOVIE_LIST_REQUEST_ERROR': {
			return { ...state, isFetching: false };
		}

		default:
			return state;
	}
};