import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books
  const [noResults, setNoResults] = useState(false); // State for no results message
  const [hasSearched, setHasSearched] = useState(false); // State to track if search has been executed

  // Fetch books from API
  const getBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`); // Fetch all books
      setBooks(response.data.data); // Update state with fetched books
      setFilteredBooks(response.data.data); // Initialize filteredBooks with all books
    } catch (error) {
      console.error("Error fetching books:", error); // Handle error
    }
  };

  useEffect(() => {
    getBooks(); // Call function to fetch books when component mounts
  }, []);

  // Handle search action
  const handleSearch = () => {
    if (searchTerm) {
      // Filter books based on search term
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredBooks(filtered); // Update the filtered books state
      setHasSearched(true); // Mark that a search has been executed

      // Show message if no books are found
      if (filtered.length === 0) {
        setNoResults(true); // Show no results message
      } else {
        setNoResults(false); // Hide no results message
      }
    } else {
      setFilteredBooks(books); // Reset to all books if search term is empty
      setNoResults(false); // Hide no results message
      setHasSearched(false); // Reset search status
    }
  };

  // Reset search term and show all books
  const handleReset = () => {
    setSearchTerm(""); // Clear the search term
    setFilteredBooks(books); // Reset to all books
    setNoResults(false); // Hide no results message
    setHasSearched(false); // Reset search status
  };

  // Delete a book by ID
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      // Confirm deletion
      try {
        await axios.delete(`${BASE_URL}/books/${id}`); // Delete book from API
        getBooks(); // Refresh book list after deletion
      } catch (error) {
        console.error("Error deleting book:", error); // Handle error
      }
    }
  };

  return (
    <div className="ml-[10%] mt-[5%]">
      <div className="mb-[6%] flex flex-col items-center">
        <div className="flex items-center w-full justify-center mb-4">
          <input
            type="text"
            placeholder="Find Book"
            value={searchTerm} // Control input value with state
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
            className="w-[40%] max-w-sm px-4 py-2 border-2 border-blue-600 rounded-l-md focus:outline-none"
          />
          <button
            className="py-2 px-4 rounded-r-md bg-blue-600 hover:bg-[#F5B841] text-white flex items-center"
            type="button"
            onClick={handleSearch} // Trigger search on button click
          >
            <CiSearch className="text-white text-xl" />
          </button>

          {/* Show Reset button only after a search has been executed */}
          {hasSearched && (
            <button
              className="ml-2 py-2 px-4 rounded-md bg-gray-400 text-white"
              type="button"
              onClick={handleReset} // Reset books on button click
            >
              Reset
            </button>
          )}
        </div>
        <h1 className="text-[#A9643E] text-4xl font-bold mb-4">BOOKS.</h1>
        <Link to="/reviews">
          <button className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-[#F5B841] text-white">
            Reviews
          </button>
        </Link>
      </div>

      {/* Display message if no books found */}
      {noResults && (
        <div className="mb-4 text-red-600 text-center">
          <p>No books found. Please try a different search.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <div key={index} className="text-center">
            <Link to={`/books/${book._id}`}>
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-auto rounded-lg"
              />
            </Link>
            <p className="font-bold text-lg mt-2">{book.title}</p>
            <p className="text-gray-700">{book.author}</p>
            <div className="flex flex-row justify-center mt-2">
              <Link
                to={`/edit/${book._id}`}
                className="text-yellow-600 mr-4 font-bold text-2xl"
              >
                <FiEdit />
              </Link>
              <button
                onClick={() => handleDelete(book._id)} // Call delete handler with book ID
                className="text-red-600 font-bold text-2xl"
              >
                <FiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
