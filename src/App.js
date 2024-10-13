import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import AddProducts from './AddProducts';
import Footer from './Footer';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import { useState } from 'react';
import UpdateProduct from './updateProduct';

function App() {
  const [cartCount,setCartCount]=useState(0);
  const [cartProducts,setCartProducts]=useState([]);

  const handleAddToCart=(product)=>{
    let flag=true;
    for(const p of cartProducts)
    {
      if(p.id==product.id)
        flag=false;
    }
    if(flag)
    {
      setCartCount(cartCount+1);
    cartProducts.push(product);
    setCartProducts(cartProducts);
    }
    
  }
  const onRemove = (id) => {
    const updated=cartProducts.filter(product=>product.id!==id);
    setCartProducts(updated);
    setCartCount(updated.length);
    
  };
  return (
    <Router>
      <Navbar cartCount={cartCount}/>
      <Switch>
        <Route exact path="/">
          <Home onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/add">
          <AddProducts/>
          </Route>
          <Route 
          exact 
          path="/cart" 
          render={(props) => (
            <Cart {...props} cartProducts={cartProducts} onRemove={onRemove} />
          )}
        />
          <Route exact path="/products/:id">
          <ProductDetail/>
          </Route>
          <Route exact path="/update-product/:id">
          <UpdateProduct/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
