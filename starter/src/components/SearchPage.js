import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shelf } from "./Shelf";

export const SearchPage = ({ books, handleTargetBookChange }) => {
  const [query, setQuery] = useState("");

  const authorsIn = (authors) => {
    authors.forEach((author) => {
      author.toLowerCase().includes(query);
    });
  };

  const updateQuery = (query) => {
    setQuery(query.trim().toLowerCase());
    console.log(query);
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter(
          (book) =>
            book.title.toLowerCase().includes(query) ||
            book.industryIdentifiers[0].identifier.includes(query) ||
            authorsIn(book.authors)
        );

  const clearQuery = () => {
    updateQuery("");
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelf
            shelves={false}
            shelf={false}
            books={showingBooks}
            handleTargetBookChange={handleTargetBookChange}
          />
        </div>
      </div>
    </div>
  );
};
