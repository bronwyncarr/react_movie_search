import React, { useState } from "react";
import SearchMovies from "./SearchMovies";
import DisplayMovies from "./DisplayMovies";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Submit!");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e201a6a56670b97f3a5f97c76b8c85e2&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(`Sorry an error occured: ${e}`);
    }
  };

  const handleSearchChange = (value) => {
    setQuery(value);
  };

  return (
    <>
      <SearchMovies
        value={query}
        handleChange={handleSearchChange}
        handleSubmit={handleSearch}
      />
      <DisplayMovies movies={movies} />
    </>
  );
}

export default App;
