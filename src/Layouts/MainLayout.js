import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ children,cartCount,onSearch }) => {
  return (
    <div>
      <Header cartCount={cartCount} onSearch={onSearch}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
