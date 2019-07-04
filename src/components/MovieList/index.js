import { connect } from 'react-redux';
import MovieList from './MovieList';
import { getMovieList } from '../../actions/movieList';
import { getMovieDetails } from '../../actions/movieDetails';

const mapStateToProps = state => ({
	isFetching: state.movieList.isFetching,
	data: state.movieList.data,
});

const mapDispatchToProps = dispatch => ({
	getMovieList: page => dispatch(getMovieList(page)),
	getMovieDetails: id => dispatch(getMovieDetails(id)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);