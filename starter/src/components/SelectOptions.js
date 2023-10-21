import React from "react";
import { shelvesState } from "./ShelvesState";

export const SelectOptions = ({ book, handleTargetBookChange }) => {
  const onOptionChangeHandler = (event) => {
    handleTargetBookChange(book, event.target.value);
  };

  /** if (shelvesState.length < 4) {
    shelvesState.push({ shelf: "none", state: "None" });
  }**/

  return (
    <div className="book-shelf-changer">
      <select onChange={onOptionChangeHandler}>
        <option>Move to...</option>
        {shelvesState.map((shelf) => {
          return (
            <option
              key={shelf.shelf}
              value={shelf.shelf}
              disabled={shelf.shelf === book.shelf ? true : false}
            >
              {shelf.state}
            </option>
          );
        })}
      </select>
    </div>
  );
};
