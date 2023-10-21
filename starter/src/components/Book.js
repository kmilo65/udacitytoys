import React from "react";
import { SelectOptions } from "./SelectOptions";

export const Book = ({ book, handleTargetBookChange }) => {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          ></div>
          <SelectOptions
            book={book}
            handleTargetBookChange={handleTargetBookChange}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </div>
  );
};
