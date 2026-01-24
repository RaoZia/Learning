import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>No movie found</p>;
  }
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
        {/* <MovieCard /> */}
      </div>
    </div>
  );
};

export default MovieList;
