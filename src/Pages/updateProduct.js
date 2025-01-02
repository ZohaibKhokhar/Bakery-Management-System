import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getProduct, updateProduct } from '../Services/api';
import ProductForm from '../Components/ProductForm';

const UpdateProduct = ({ theme }) => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    quantity: '',
    url: '',
    category: '',
    unit: ''
  });
  const [isPending, setIsPending] = useState(false);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        if (theme === 'light')
          toast.error('Failed to load product details');
        else
          toast.error('Failed to load product details');
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await updateProduct(id, product);
      if (theme === 'light')
        toast.info('Product updated successfully!');
      else
        toast.dark('Product updated successfully!');
      history.push(`/products/${id}`);
    } catch (error) {
      if (theme === 'light')
        toast.error('Failed to update product');
      else
        toast.error('Failed to update product');
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
      buttonText="Update Product"
      theme={theme}
    />
  );
};

export default UpdateProduct;
