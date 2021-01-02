function Movie({ movie }) {
  // Controls what color the rating will be displayed in
  function getClassByRating() {
    if (movie.vote_average >= 8) {
      return "green";
    } else if (movie.vote_average >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={getClassByRating(movie.vote_average)}>
          {movie.vote_average}
        </span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {movie.overview}
      </div>
    </div>
  );
}

export default Movie;
