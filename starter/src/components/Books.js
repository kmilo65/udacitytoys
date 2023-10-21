import React from "react";
import { Book } from "./Book";

export const Books = ({
  shelves,
  bookShelf,
  books,
  handleTargetBookChange,
}) => {
  return (
    <div>
      <ol className="books-grid">
        {shelves
          ? books
              .filter(
                (book) => book.shelf.toLowerCase() === bookShelf.toLowerCase()
              )
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    handleTargetBookChange={handleTargetBookChange}
                  />
                </li>
              ))
          : books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  handleTargetBookChange={handleTargetBookChange}
                />
              </li>
            ))}
      </ol>
    </div>
  );
};
