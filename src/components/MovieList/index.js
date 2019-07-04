import { connect } from 'react-redux';
import MovieList from './MovieList';
import { getMovieList } from '../../actions/movieList';

const mapStateToProps = state => ({
	isFetching: state.movieList.isFetching,
	data: state.movieList.data,
});

const mapDispatchToProps = dispatch => ({
	getMovieList: page => dispatch(getMovieList(page)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MovieList);