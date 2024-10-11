
import { BASE_URL } from "../../constants";
import axios from "axios";
import { FiTrash } from "react-icons/fi";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]); // State to hold reviews
  const [newReview, setNewReview] = useState(""); // State to hold the new review input

  // Function to fetch all reviews
  const getReviews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/reviews`); // Fetch reviews from API
      setReviews(response.data.data); // Set the reviews state
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews(); // Fetch reviews when the component mounts
  }, []);

  // Function to handle the submission of a new review
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newReview) return; // Ensure there's a review to submit

    try {
      await axios.post(`${BASE_URL}/reviews`, { review: newReview }); // Post new review to API
      setNewReview(""); // Clear the input field
      getReviews(); // Fetch updated reviews
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  // Function to handle deleting a review
  const handleDelete = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`${BASE_URL}/reviews/${reviewId}`); // Delete review from API
        getReviews(); // Fetch updated reviews
      } catch (error) {
        console.error("Error deleting the review:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Reviews</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)} // Update newReview state on input change
          placeholder="Write your review here..."
          className="w-full border-2 border-blue-600 rounded-md p-2 mb-4"
          rows="4"
        />
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md">
          Submit Review
        </button>
      </form>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">All Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p> // Show message if no reviews exist
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="flex justify-between items-center border-b py-2">
              <p className="flex-1">{review.review}</p>
              <button onClick={() => handleDelete(review._id)} className="text-red-600">
                <FiTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


