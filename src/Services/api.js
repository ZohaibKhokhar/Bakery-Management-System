const BASE_URL = 'https://localhost:7069/api';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/Product`);
    console.log(response);
    if (!response.ok) throw new Error('Failed to fetch products');
   return response.json();
  }
  catch (error){
    console.error(error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (product) => {
  try {
    console.log("Product being sent:", product);
    const response = await fetch(`${BASE_URL}/Product`, {
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
    const response = await fetch(`${BASE_URL}/Product/${id}`);
    console.log(`Fetching from URL: ${BASE_URL}/Product`);
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
    const response = await fetch(`${BASE_URL}/Product/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) throw new Error('Failed to update product');
    // Handle 204 No Content (typical for DELETE)
    if (response.status === 204) {
      return; // No content to return
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/Product/${id}`, {
      method: 'DELETE',
    });

    // Check if response is successful
    if (!response.ok) throw new Error(`Failed to delete product: ${response.statusText}`);

    // Handle 204 No Content (typical for DELETE)
    if (response.status === 204) {
      return; // No content to return
    }

    // Parse response JSON if available
    return await response.json();
  } catch (error) {
    console.error("Delete Product Error:", error);
    throw error;
  }
};


// Add a review to a product
export const addReviewToProduct = async (id, review) => {
  try {
    const product = await getProduct(id);
    const updatedReviews = [...product.reviews, review];

    const response = await fetch(`${BASE_URL}/Product/${id}`, {
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
