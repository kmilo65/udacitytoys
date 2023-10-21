import React from "react";
import { Shelf } from "./Shelf";
import { Link } from "react-router-dom";
import { shelvesState } from "./ShelvesState";

export const BooksShelft = ({ shelves, books, handleTargetBookChange }) => {
  if (shelvesState.length > 3) {
    shelvesState.pop();
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelvesState.map((bookShelf) => (
            <div key={Math.random().toString()}>
              <Shelf
                shelves={shelves}
                shelf={bookShelf}
                books={books}
                handleTargetBookChange={handleTargetBookChange}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/add">Add a book</Link>
      </div>
    </div>
  );
};
