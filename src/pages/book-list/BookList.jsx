import React, { useState, useEffect } from "react";
import { K } from "../../constants";
// import BookCard from "../../components/BookCard";
// // import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

const BookList = () => {
  const [BOOKS, setBooks] = useState([]);

  useEffect(() => {
    // fetch('/api/books')
    //   .then((response) => response.json())
    //   .then((data) => setBooks(data));
    setBooks(K.BOOKS);
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/books/${id}`, { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setBooks(BOOKS.filter((book) => book.id !== id));
      }
    });
  };

  return (
    <div className="ml-[10%] mt-[5%]">
      <div className=" mb-[6%] flex w-[100%] justify-around mx-auto">
      <div className="flex w-[47%] ">
          <input
            type="text"
            placeholder="Find Book"
            className="w-[40%]  max-w-sm px-4 py-2 border-2 border-blue-400 rounded-md focus:outline-none"
          />
          <div className="flex ml-[-7%]">
            <button className="w-[20%] font-bold text-2xl " type="button">
              <CiSearch />
            </button>
          </div>
        </div>
        <h1 className=" text-[#A9643E] text-4xl font-bold mr-[40%] ">BOOKS.</h1>
        <Link>
          <button className="py-2 px-4 rounded-lg bg-blue-600 text-white mr-10" type="submit">Reviews</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {K.BOOKS.map(
          (book, index) => {
            // console.log(`${index}: ${book.author}`);
            return (
              <div key={index}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.image} alt="img" />
                </Link>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <div className="flex flex-row justify-start">
                  <Link
                    to={`/edit/${book.id}`}
                    className="text-yellow-600 mr-4 font-bold text-2xl"
                  >
                    <FiEdit />
                  </Link>
                  <Link to={`/delete/${book.id}`}>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="text-red-600 font-bold text-2xl"
                    >
                      <FiTrash />
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
          // <BookCard book={book} />
          // console.log(`${index}: ${book.author}`)
          // return(
          //   <div></div>
          // )
        )}
      </div>
    </div>
  );
};

export default BookList;
