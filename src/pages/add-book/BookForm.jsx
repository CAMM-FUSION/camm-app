// src/components/BookForm.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookForm = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate();
  
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
    // Add other fields as necessary
  });

  // Fetch the book details if editing
  useEffect(() => {
    if (id) {
      fetch(`/api/books/${id}`) // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => {
          setBook(data); // Populate the form with existing book data
        })
        .catch((error) => {
          toast.error('Failed to fetch book details');
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'PUT' : 'POST'; // Use PUT for updating, POST for adding

    fetch(`/api/books${id ? `/${id}` : ''}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Book saved successfully!');
          navigate('/'); // Redirect to the book list after saving
        } else {
          toast.error('Failed to save book');
        }
      })
      .catch((error) => {
        toast.error('Error saving book');
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Published Year</label>
          <input
            type="number"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          {id ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
