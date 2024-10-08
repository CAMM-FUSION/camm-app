import React, { useState, useEffect } from "react";
import { K } from "../../constants";
import BookCard from "../../components/BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // fetch('/api/books')
    //   .then((response) => response.json())
    //   .then((data) => setBooks(data));
    setBooks(K.BOOKS);
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/books/${id}`, { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== id));
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
