import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../constants";

const BookForm = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      // post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        summary: formData.get("summary"),
        publishedYear: formData.get("publishedYear"),
      });
    } catch (error) {
      toast.error("Failed to save book");
    }
    const method = id ? "PUT" : "POST"; // PUT for updating, POST for adding

    // collect form data
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end"
      style={{
        backgroundImage: `url("/images/formbg.jpg")`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full mr-12">
        <h2 className="text-2xl font-bold  text-[#F5B841] mb-4 text-center">
          {id ? "Edit Book" : "Add Book"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              // value={book.title}
              // onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Author</label>
            {/* <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            /> */}
            <select name="cars" className="w-full border rounded p-2" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Summary</label>
            <textarea
              name="description"
              // value={book.description}
              // onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Published Year</label>
            <input
              type="number"
              name="publishedYear"
              // value={book.publishedYear}
              // onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#A9643E] text-white p-2 rounded hover:bg-[#F5B841]"
          >
            {id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
