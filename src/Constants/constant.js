

export const BASE_URL = 'https://localhost:7069/api';

export const API_ROUTES = {
  PRODUCTS: `${BASE_URL}/Product`,
};

export const API_ROUTE = {
    PRODUCTS: `${BASE_URL}`,
  };

export const getProductUrl = (id) => `${API_ROUTES.PRODUCTS}/${id}`;

export const getBaseUrl = (id) => `${API_ROUTES.PRODUCTS}`;