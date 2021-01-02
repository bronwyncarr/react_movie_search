import Movie from "./Movie";

// takes Movies array and maps over each movie to display each. 
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
