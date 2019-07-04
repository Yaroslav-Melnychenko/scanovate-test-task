import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';

const mapStateToProps = state => ({
	isFetching: state.movieDetails.isFetching,
	data: state.movieDetails.data,
});

export default connect(
  mapStateToProps, 
)(MovieInfo);
