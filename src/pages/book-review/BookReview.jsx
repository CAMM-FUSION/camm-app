import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-3xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

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

const BookReview = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, rating, comment });
    setIsThankYouOpen(true);
    // Reset form
    setTitle('');
    setRating(0);
    setComment('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rating
          </label>
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
            Update Review
          </button>
        </div>
      </form>
      <ThankYouPopup isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />
    </div>
  );
};

export default BookReview;