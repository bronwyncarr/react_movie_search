import React from "react";

function SearchMovies({ query, handleSubmit, handleChange }) {
  return (
    <header>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          id="query"
          className="query"
          placeholder="Search..."
          value={query}
        />
        <button
          className="query-btn"
          id="search-btn"
          type="submit"
          value="submit"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
}

export default SearchMovies;
