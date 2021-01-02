import React, { useState } from "react";
import SearchMovies from "./SearchMovies";
import DisplayMovies from "./DisplayMovies";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetches data from APi based on query in state, updates movies array with response.
  // Error handling if no response recieved.
  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e201a6a56670b97f3a5f97c76b8c85e2&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (e) {
      console.log(`Sorry an error occured: ${e}`);
    }
  };

  // With each keystroke the state of query is updated. Only once submit is clicked a fetch requiest is made. 
  const handleSearchChange = (value) => {
    setQuery(value);
  };

  return (
    <>
    {/* Search movies is the Searchbar up the top
    E ach key stroke updates the query state. A submit sends a fetch request and updates movies array*/}
      <SearchMovies
        value={query}
        handleChange={handleSearchChange}
        handleSubmit={handleSearch}
      />
      {/* Movies array is passed in to DisplayMovies to then be mapped over and displayed individually. */}
      <DisplayMovies movies={movies} />
    </>
  );
}

export default App;
