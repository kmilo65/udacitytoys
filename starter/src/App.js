import "./App.css";
import { useEffect, useState } from "react";
import * as BooksApi from "./BooksAPI";
import { SearchPage } from "./components/SearchPage";
import { BooksShelft } from "./components/BooksShelf";
import { Routes, Route } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  //  const [targetBook, setTargetBook] = useState([]);
  //  const targetShelf = "";

  useEffect(() => {
    const searchBooks = () => {
      const books = async () => {
        const res = await BooksApi.getAll();
        setBooks(res);
      };
      books();
    };
    searchBooks();
  }, []);

  console.log(books);
  const handleTargetBookChange = (targetBook, shelf) => {
    let targetId = targetBook.id;
    const newBooks = books.map((book) => {
      if (book.id === targetId) {
        book.shelf = shelf;
        updateBook(book, shelf);
        return book;
      } else {
        return book;
      }
    });
    setBooks(newBooks);
  };

  const updateBook = (targetBook, shelf) => {
    const updateTargetBook = async () => {
      const res = await BooksApi.update(targetBook, shelf);
    };
    updateTargetBook();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/add"
          element={
            <SearchPage
              books={books}
              handleTargetBookChange={handleTargetBookChange}
            />
          }
        />

        <Route
          exact
          path="/"
          element={
            <BooksShelft
              books={books}
              shelves={true}
              handleTargetBookChange={handleTargetBookChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
