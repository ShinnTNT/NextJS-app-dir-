"use client";

import React, { FormEvent, useState } from "react";

const SearchBar = ({
  getSearchResult,
}: {
  getSearchResult: (result: any) => void;
}) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    const response = await fetch(`/api/courses/search?query=${query}`);
    const data = await response.json();
    getSearchResult(data);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search.."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
