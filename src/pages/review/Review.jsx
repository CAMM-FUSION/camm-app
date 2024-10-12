import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiTrash } from 'react-icons/fi';

const BASE_URL = "https://camm-api.onrender.com"; 

// StarRating Component
const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// ThankYouPopup Component
const ThankYouPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-4">Your review has been successfully updated.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};


const Review = () => {
  const [reviews, setReviews] = useState([]); // State to hold all reviews
  const [title, setTitle] = useState(''); // State to hold book title
  const [rating, setRating] = useState(0); // State to hold star rating
  const [comment, setComment] = useState(''); // State to hold comment
  const [isThankYouOpen, setIsThankYouOpen] = useState(false); // State for Thank You popup

  // Fetch all reviews from API
  const getReviews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/reviews`);
      setReviews(response.data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  // Function to handle submission of a new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !comment || rating === 0) {
      alert("Please fill out all fields including the star rating.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/reviews`, {
        title,   
        rating,
        comment
      });
      
      // Reset form and show thank you popup
      setTitle('');   // Clear the title field after submission
      setRating(0);
      setComment('');
      setIsThankYouOpen(true);
      
      // Fetch updated reviews after submission
      getReviews();
      
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  // Function to handle deleting a review
  const handleDelete = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`${BASE_URL}/reviews/${reviewId}`);
        getReviews(); // Fetch updated reviews after deletion
      } catch (error) {
        console.error("Error deleting the review:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Reviews</h1>

      {/* Review Submission Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comments
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150"
          >
            Submit Review
          </button>
        </div>
      </form>

      {/* Thank You Popup */}
      <ThankYouPopup isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />

      {/* Display all reviews */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">All Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-center">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
                <div>
                  <p className="font-semibold"><strong>Title:</strong> {review.title || 'Soul'}</p> {/* Ensure title displays */}
                  <p><strong>Rating:</strong> {review.rating} / 5</p>
                  <p><strong>Comment:</strong> {review.comment}</p>
                </div>
                <button onClick={() => handleDelete(review._id)} className="text-red-600">
                  <FiTrash className="text-2xl" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
