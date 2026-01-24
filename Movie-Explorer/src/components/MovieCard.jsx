import React from "react";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`}>Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
