import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import AddProducts from './Pages/AddProducts';
import Cart from './Pages/Cart';
import ProductDetail from './Components/ProductDetail';
import NotFound from './Pages/NotFound';
import { fetchProducts, deleteProduct, addProduct } from './Services/api';
import ProtectedRoute from './Components/ProtectedRoute';
import { useTheme } from './Providers/ThemeProvider';
import MainLayout from './Layouts/MainLayout';
import UpdateProduct from './Pages/updateProduct';
import Products from './Pages/Products';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const products = await fetchProducts();
        setProducts(products);
        setFilteredProducts(products);
        setError(null);
      }
      catch(err){
        toast.error('Failed to load products');
        setError(err.message);
      }
      finally{
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
      if (theme === 'light')
        toast.success(`${product.name} added to cart!`);
      else
        toast.dark(`${product.name} added to cart!`);
    }
  };

  const onRemove = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    setCartCount(updatedCart.length);
    if (theme === 'light')
      toast.info("Product removed from cart");
    else
      toast.dark("Product removed from cart");
  };

  const addProductHandler = async (newProduct) => {
    const addedProduct = await addProduct(newProduct);
    setProducts((prev) => [...prev, addedProduct]);
    setFilteredProducts((prev) => [...prev, addedProduct]);
    if (theme === 'light')
      toast.success("Product added successfully!");
    else
      toast.dark('Product added successfully');
  };

  const onDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      setFilteredProducts((prev) => prev.filter((product) => product.id !== id));
      if (theme === 'light')
        toast.success("Product deleted successfully!");
      else
        toast.dark("Product deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Router>
        <MainLayout cartCount={cartCount} onSearch={handleSearch} changeTheme={toggleTheme} theme={theme}>
          <ToastContainer position="top-right" autoClose={1000} />
          <Switch>
            <ProtectedRoute exact path="/">
              <Home
                onAddToCart={handleAddToCart}
                products={filteredProducts}
                theme={theme}
                isLoading={isLoading}
                error={error}
              />
            </ProtectedRoute>

            <ProtectedRoute exact path="/add">
              <AddProducts onAddProduct={addProductHandler} theme={theme} />
            </ProtectedRoute>

            <ProtectedRoute exact path="/products">
              <Products
                onAddToCart={handleAddToCart}
                products={filteredProducts}
                isLoading={isLoading}
                error={error}
                theme={theme}
              />
            </ProtectedRoute>
            <Route exact path="/cart" render={(props) => (
              <Cart {...props} cartProducts={cartProducts} onRemove={onRemove} theme={theme} />
            )}
            />
            <Route exact path="/products/:id">
              <ProductDetail onDeleteProduct={onDeleteProduct} theme={theme} />
            </Route>
            <Route exact path="/update-product/:id">
              <UpdateProduct theme={theme} />
            </Route>
            <Route path="*">
              <NotFound theme={theme} />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </div>
  );
}


export default AppContent;
