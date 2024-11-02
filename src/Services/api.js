const BASE_URL = 'http://localhost:8000';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Could not fetch products');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to add product');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Fetch a single product by ID
export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update a product by ID
export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Add a review to a product
export const addReviewToProduct = async (id, review) => {
  try {
    const product = await getProduct(id);
    const updatedReviews = [...product.reviews, review];

    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviews: updatedReviews }),
    });

    if (!response.ok) throw new Error('Failed to add review');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
