import React, { useState } from "react";
import FormField from "./FormField";

const Reviews = ({ reviews = [], onAddReview, theme }) => {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      onAddReview(newReview.trim()); // Pass only the review string
      setNewReview(""); // Reset the input field
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      <ul className="mb-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index} className="border-b py-2">
              <p>{review}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </ul>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <FormField
          label="Review"
          id="review"
          name="review"
          type="textarea"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
          placeholder="Write a review..."
          theme={theme}
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
