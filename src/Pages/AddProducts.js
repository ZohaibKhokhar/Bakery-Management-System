import { useState } from 'react';
import ProductForm from '../Components/ProductForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AddProducts = ({ onAddProduct }) => {
  const [isPending, setIsPending] = useState(false);
  const history=useHistory();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    quantity: '',
    url: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await onAddProduct(product);
      history.push('/');
    } catch (error) {
      console.error("Error adding product", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <ProductForm
      product={product}
      setProduct={setProduct}
      isPending={isPending}
      onSubmit={handleSubmit}
      buttonText="Add Product"
    />
  );
};

export default AddProducts;
