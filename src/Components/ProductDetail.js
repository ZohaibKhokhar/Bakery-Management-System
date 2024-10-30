import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { getProductUrl } from "../constants";
import ConfirmationDialog from "./ConfirmationDialog";
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import ProductImage2 from './ProductImage2';
import Reviews from './Reviews'; // Import the Reviews component

const ProductDetail = ({ onDeleteProduct }) => {
  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(getProductUrl(id));
  const history = useHistory();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviews, setReviews] = useState([]); // State for reviews

  const handleClick = () => {
    onDeleteProduct(product.id); 
    history.push('/');
  };

  // Function to handle adding a new review
  const handleAddReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 bg-gray-100">
      <div className="flex-grow max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
        {isPending && <div className="text-center py-6">Loading...</div>}
        {error && <div className="text-center py-6 text-red-500">Error: {error}</div>}

        {!isPending && product && (
          <div className="p-8 md:flex md:space-x-8">
            <ProductImage2 url={product.url} name={product.name} />
            
            <div className="flex flex-col justify-between w-full">
              <ProductInfo product={product} />

              <div className="mt-8">
                <ProductActions 
                  onDeleteClick={() => setIsDialogOpen(true)} 
                  productId={product.id} 
                />
              </div>
              
              {/* Reviews Section */}
              <Reviews reviews={reviews} onAddReview={handleAddReview} />
            </div>
          </div>
        )}
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)} 
        onConfirm={handleClick} 
        message="Are you sure you want to delete this product?"
      />
    </div>
  );
};

export default ProductDetail;
