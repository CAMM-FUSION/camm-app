import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/books/${book.id}`}
      key={book.id}
      className="bg-white p-4 rounded shadow"
    >
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <div className="flex justify-between mt-4">
        <Link to={`/books/${book.id}`} className="text-indigo-600">
          View Details
        </Link>
        <div className="flex">
          <Link to={`/edit/${book.id}`} className="text-yellow-600 mr-4">
            <FiEdit />
          </Link>
          <button
            onClick={() => handleDelete(book.id)}
            className="text-red-600"
          >
            <FiTrash />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
