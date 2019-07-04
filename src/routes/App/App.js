import React from 'react';
import MovieList from '../../components/MovieList';
import MovieInfo from '../../components/MovieInfo';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <MovieList />
      <MovieInfo />
    </div>
  );
}

export default App;
