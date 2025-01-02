import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { getProductUrl } from '../Constants/constant';
import ConfirmationDialog from "./ConfirmationDialog";
import ProductInfo from './ProductInfo';
import ProductActions from './ProductActions';
import ProductImage2 from './ProductImage2';
import Reviews from './Reviews'; 
import { addReviewToProduct } from '../Services/api';

const ProductDetail = ({ onDeleteProduct,theme }) => {
  const { id } = useParams();
  const { data: product, isPending, error } = useFetch(getProductUrl(id));
  const history = useHistory();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reviews, setReviews] = useState([]); 
  const [isAddingReview, setIsAddingReview] = useState(false);
  const bgClass=`flex-grow max-w-4xl shadow-xl rounded-lg overflow-hidden ${theme==='light'?'bg-white':'bg-black'}`;


  useEffect(() => {
    if (product) {
      setReviews(product.reviews || []);
    }
  }, [product]);

  const handleDeleteClick = () => {
    onDeleteProduct(product.id); 
    history.push('/');
  };

  const handleAddReview = async (review) => {
    setIsAddingReview(true);
    try {
      await addReviewToProduct(product.id, review);
      setReviews((prevReviews) => [...prevReviews, review]);
    } catch (error) {
      console.error("Failed to add review:", error);
    } finally {
      setIsAddingReview(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center shadow-xl justify-center mt-8 ">
      <div className={bgClass}>
        {isPending && <div className="text-center py-6">Loading...</div>}
        {error && <div className="text-center py-6 text-red-500">Error: {error}</div>}

        {!isPending && product && (
          <div className="p-8 md:flex md:space-x-8">
            <ProductImage2 url={product.url} name={product.name} />
            
            <div className="flex flex-col justify-between w-full">
              <ProductInfo product={product} theme={theme} />

              <div className="mt-8">
                <ProductActions 
                  onDeleteClick={() => setIsDialogOpen(true)} 
                  productId={product.id} 
                />
              </div>
                 {/* Reviews Section */}
                 {/* <Reviews 
                reviews={reviews} 
                onAddReview={handleAddReview} 
                isAddingReview={isAddingReview}
                theme={theme}
              /> */}
        
            </div>
             
          </div>
          
        )}
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)} 
        onConfirm={handleDeleteClick} 
        message="Are you sure you want to delete this product?"
        theme={theme}
      />
    </div>
  );
};

export default ProductDetail;
