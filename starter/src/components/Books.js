import React from "react";
import { Book } from "./Book";

export const Books = ({
  shelves,
  bookShelf,
  books,
  handleTargetBookChange,
  handleTargetSearchBookChange,
}) => {
  console.log(shelves);
  return (
    <div>
      <ol className="books-grid">
        {shelves && books ? (
          books
            .filter(
              (book) => book.shelf.toLowerCase() === bookShelf.toLowerCase()
            )
            .map((book) => (
              <li key={book.id}>
                <Book
                  origen={true}
                  book={book}
                  handleTargetSearchBookChange={handleTargetSearchBookChange}
                  handleTargetBookChange={handleTargetBookChange}
                />
              </li>
            ))
        ) : !shelves && books ? (
          books.map((book) => (
            <li key={book.id}>
              <Book
                origen={false}
                book={book}
                handleTargetSearchBookChange={handleTargetSearchBookChange}
                handleTargetBookChange={handleTargetBookChange}
              />
            </li>
          ))
        ) : (
          <div></div>
        )}
      </ol>
    </div>
  );
};
