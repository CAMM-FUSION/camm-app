import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { BASE_URL } from "../../constants";
import axios from "axios";
import { FiEdit, FiTrash } from "react-icons/fi";

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to hold the book details
  const navigate = useNavigate(); // Initialize navigate for redirection

  const getBookDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books/${id}`); // Fetch book details by ID
      setBook(response.data.data); // Set the book details state
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    getBookDetails(); // Fetch the book details when the component mounts
  }, [id]);

  const handleDelete = async (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`${BASE_URL}/books/${bookId}`); // Send delete request
        navigate("/books"); // Redirect to the books list after deletion
      } catch (error) {
        console.error("Error deleting the book:", error);
      }
    }
  };

  if (!book) return <div>Loading...</div>; // Show loading state while fetching

  return (
    <div className="container mx-auto  ml-[5%] px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        {/* Style the image to be smaller and visually appealing */}
        <img 
          src={book.cover} 
          alt={book.title} 
          className="w-1/2 h-auto rounded-lg mx-auto mb-4 shadow-md" 
        />
        <p className="text-gray-700 mb-4"><strong>Author:</strong> {book.author}</p>
        <p className="text-gray-700 mb-4"><strong>Summary:</strong> {book.summary}</p>
        <p className="text-gray-700 mb-4"><strong>Published Year:</strong> {book.publishedYear}</p>
        <p className="text-gray-700 mb-4"><strong>Language:</strong> {book.language}</p>
        {/* <p className="text-gray-700 mb-4"><strong>Number Of Pages:</strong> {book.numberOfPages}</p> */}
        <p className="text-gray-700 mb-4"><strong>Genres:</strong> {book.genres}</p>
        <p className="text-gray-700 mb-4"><strong> Publisher:</strong> {book. publisher}</p>
        <div className="flex justify-between mt-6">
          <Link to={`/edit/${book._id}`} className="text-yellow-600 font-bold flex items-center">
            <FiEdit className="mr-2" /> Edit
          </Link>
          <button
            onClick={() => handleDelete(book._id)} // Call handleDelete with the book ID
            className="text-red-600 font-bold flex items-center"
          >
            <FiTrash className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
