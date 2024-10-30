import React, { useState } from "react";

const Reviews = ({ reviews = [], onAddReview }) => {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      onAddReview(newReview);
      setNewReview("");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
      <ul className="mb-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li key={index} className="border-b py-2">
              {review}
            </li>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </ul>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          className="border rounded-lg p-2"
          placeholder="Write a review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
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
