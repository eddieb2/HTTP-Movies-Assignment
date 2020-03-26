import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  const history = useHistory();

  return (
    <div className="movie-list">
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          history.push('/add-movie');
        }}
      >
        Add Movie
      </Button>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
