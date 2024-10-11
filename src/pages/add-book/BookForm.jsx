import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../constants";

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [authors, setAuthors] = useState([]);
  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(event.target); // Get form data

    try {
      const method = id ? "patch" : "post"; // Determine method
      const url = `${BASE_URL}/books${id ? `/${id}` : ""}`; // Set URL
      await axios[method](url, {
        title: formData.get("title"),
        author: formData.get("author"),
        summary: formData.get("summary"),
        publishedYear: formData.get("publishedYear"),
        language: formData.get("language"), // Get language input
        genres: formData.get("genres"), // Get genres input
        publisher: formData.get("publisher"), // Get publisher input
        cover: 'https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg',
        NumberOfPages: 54,
      });
      
      toast.success(id ? "Book updated successfully!" : "Book added successfully!"); // Success message
      navigate("/books"); // Redirect after success
    } catch (error) {
      toast.error("Failed to save book"); // Error message
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end ml-[10%]"
      style={{
        backgroundImage: `url("/formbg.jpg")`,
      }}
    >
      <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg max-w-md w-full mr-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          {id ? "Edit Book" : "Add Book"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Author</label>
            <select name="author" className="w-full border rounded p-2" id="cars" required>
              {authors.map((author) => (
                <option key={author._id} value={author._id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Summary</label>
            <textarea
              name="summary"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="flex space-x-4"> {/* Flex container for side by side inputs */}
            <div className="flex-1">
              <label className="block text-gray-700">Published Year</label>
              <input
                type="number"
                name="publishedYear"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Publisher</label>
              <input
                type="text"
                name="publisher"
                className="w-full border rounded p-2"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4"> {/* Flex container for Language and Genres */}
            <div className="flex-1">
              <label className="block text-gray-700">Language</label>
              <input
                type="text"
                name="language"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Genres</label>
              <input
                type="text"
                name="genres"
                className="w-full border rounded p-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-[#F5B841]"
          >
            {id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
