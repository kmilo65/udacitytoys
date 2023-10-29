import React from "react";
import { Books } from "./Books";

export const Shelf = ({
  shelves,
  shelf,
  books,
  handleTargetSearchBookChange,
  handleTargetBookChange,
}) => {
  console.log(shelves);
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.state}</h2>
        <div className="bookshelf-books">
          {shelves ? (
            <Books
              shelves={true}
              bookShelf={shelf.shelf}
              books={books}
              handleTargetBookChange={handleTargetBookChange}
              handleTargetSearchBookChange={handleTargetSearchBookChange}
            />
          ) : (
            <Books
              shelves={false}
              books={books}
              handleTargetSearchBookChange={handleTargetSearchBookChange}
              handleTargetBookChange={handleTargetBookChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
