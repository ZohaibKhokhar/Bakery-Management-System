// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import AddProducts from './Pages/AddProducts';
import Cart from './Pages/Cart';
import ProductDetail from './Components/ProductDetail';
import NotFound from './Pages/NotFound';
import { fetchProducts,deleteProduct,addProduct } from './Services/api';
import ProtectedRoute from './Components/ProtectedRoute';
import { ThemeProvider } from './Providers';
import MainLayout from './Layouts/MainLayout';
import UpdateProduct from './Pages/updateProduct';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    if (!cartProducts.some((p) => p.id === product.id)) {
      setCartCount(cartCount + 1);
      setCartProducts([...cartProducts, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const onRemove = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    setCartCount(updatedCart.length);
    toast.info("Product removed from cart");
  };

  const addProductHandler = async (newProduct) => {
      const addedProduct = await addProduct(newProduct);
      setProducts((prev) => [...prev, addedProduct]);
      setFilteredProducts((prev) => [...prev, addedProduct]);
      toast.success("Product added successfully!");
  };

  const onDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      setFilteredProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <MainLayout cartCount={cartCount} onSearch={handleSearch}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home
                onAddToCart={handleAddToCart}
                products={filteredProducts}
                isLoading={isLoading}
                error={error}
              />
            </ProtectedRoute>
            <ProtectedRoute exact path="/add">
              <AddProducts onAddProduct={addProductHandler} />
            </ProtectedRoute>
            <Route 
              exact 
              path="/cart" 
              render={(props) => (
                <Cart {...props} cartProducts={cartProducts} onRemove={onRemove} />
              )}
            />
            <Route exact path="/products/:id">
              <ProductDetail onDeleteProduct={onDeleteProduct} /> {/* Pass onDeleteProduct here */}
            </Route>
            <Route exact path="/update-product/:id">
              <UpdateProduct />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
