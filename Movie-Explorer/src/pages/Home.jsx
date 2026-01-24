import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

const Home = () => {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  const inputRef = useRef();
  const fetchMovies = async (query) => {
    setloading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=4bbe1039&s=${query}`
    );
    const data = await res.json();
    console.log(data);
    setmovies(data.Search || []);
    setloading(false);
  };

  useEffect(() => {
    fetchMovies("Avengers");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = inputRef.current.value.trim();
    if (query) {
      fetchMovies(query);
    }
  };
  return (
    <div className="home">
      <form action="" onSubmit={handleSearch}>
        <input
          type="search"
          className="searchInput"
          placeholder="Search for a movie..."
          ref={inputRef}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
