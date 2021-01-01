// import React from "react";
import Movie from "./Movie";

function DisplayMovies({ movies }) {
  return (
    <div className="main">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default DisplayMovies;
