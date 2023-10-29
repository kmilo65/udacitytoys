import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shelf } from "./Shelf";
import * as BooksApi from "../BooksAPI";
import { useEffect } from "react";

export const SearchPage = ({ books, addBook }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const maxResults = 10;
  let idsData = [];

  useEffect(() => {
    const getSearchedBooks = () => {
      const searchBooks = async () => {
        console.log(query.length);
        if (query.length > 0) {
          const res = await BooksApi.search(query, maxResults);

          if (res.length > 0) {
            ids();

            const data = res?.filter((book) => {
              if (!idsData.includes(book.id.toLowerCase())) {
                console.log(book.id.toLowerCase());
                return book;
              }
            });

            updateShelf(data);
          }
        }
      };
      searchBooks();
    };
    getSearchedBooks();
  }, [query]);

  const updateQuery = (query) => {
    setQuery(query.trim().toLowerCase());
    console.log(query);
  };

  const ids = () => {
    books.forEach((book) => {
      idsData.push(book.id.toLowerCase());
    });
    console.log(idsData);
    return idsData;
  };

  const updateShelf = (data) => {
    ids();

    if (Array.isArray(data)) {
      const sbooks = data.map((el) => {
        return { ...el, shelf: "none" };
      });

      sbooks.filter((book) => {
        if (!idsData.includes(book.id.toLowerCase())) {
          console.log(book.id.toLowerCase());
          return book;
        }
      });
      setSearchedBooks(sbooks);
    }
  };

  const handleTargetSearchBookChange = (targetBook, shelf) => {
    let targetId = targetBook.id;
    const newBooks = searchedBooks.map((book) => {
      if (book.id === targetId) {
        book.shelf = shelf;
        return book;
      } else {
        return book;
      }
    });
    console.log(newBooks);
    setSearchedBooks(newBooks);
  };

  const handleOnClick = () => {
    addBook(books, searchedBooks);
    setQuery("");
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" onClick={() => handleOnClick()} className="close-search">
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
            books={searchedBooks}
            handleTargetSearchBookChange={handleTargetSearchBookChange}
            handleTargetBookChange={""}
          />
        </div>
      </div>
    </div>
  );
};
