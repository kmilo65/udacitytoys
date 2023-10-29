import React from "react";
import { shelvesState } from "./ShelvesState";

export const SelectOptions = ({
  book,
  shelve,
  handleTargetSearchBookChange,
  handleTargetBookChange,
}) => {
  const onOptionChangeHandler = (event) => {
    console.log(shelve);
    if (shelve) {
      handleTargetBookChange(book, event.target.value);
    } else {
      handleTargetSearchBookChange(book, event.target.value);
    }
  };

  if (shelvesState.length < 4) {
    shelvesState.push({ shelf: "none", state: "None" });
  }

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
