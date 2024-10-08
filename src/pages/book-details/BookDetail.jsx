import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-600 mt-2">Author: {book.author}</p>
      <p className="text-gray-600 mt-4">Description: {book.description}</p>
    </div>
  );
};

export default BookDetail;
