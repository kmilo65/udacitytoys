import React from "react";
import { SelectOptions } from "./SelectOptions";

export const Book = ({
  book,
  handleTargetBookChange,
  handleTargetSearchBookChange,
  origen,
}) => {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          {origen && book ? (
            <SelectOptions
              book={book}
              shelve={true}
              handleTargetBookChange={handleTargetBookChange}
            />
          ) : !origen && book ? (
            <SelectOptions
              book={book}
              shelve={false}
              handleTargetSearchBookChange={handleTargetSearchBookChange}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </div>
  );
};
