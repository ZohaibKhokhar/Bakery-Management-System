import React, { useState } from "react";
import FormField from "./FormField";

const Reviews = ({ reviews = [], onAddReview }) => {
  const [newReview, setNewReview] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && rating && newReview.trim()) {
      const review = { name, rating, message: newReview };
      onAddReview(review);
      setNewReview("");
      setName("");
      setRating("");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      <ul className="mb-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index} className="border-b py-2">
              <strong>{review.name}</strong> (Rating: {review.rating}/5):
              <p>{review.message}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </ul>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <FormField
          label="Name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />

        {/* Rating Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="rating">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select rating
            </option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <FormField
          label="Review"
          id="review"
          name="review"
          type="textarea"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
          placeholder="Write a review..."
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
