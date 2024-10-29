// src/constants.js

export const BASE_URL = 'http://localhost:8000';

export const API_ROUTES = {
  PRODUCTS: `${BASE_URL}/products`,
};

export const API_ROUTE = {
    PRODUCTS: `${BASE_URL}`,
  };

export const getProductUrl = (id) => `${API_ROUTES.PRODUCTS}/${id}`;

export const getBaseUrl = (id) => `${API_ROUTES.PRODUCTS}`;
