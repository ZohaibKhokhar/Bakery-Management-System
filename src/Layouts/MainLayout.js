import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = ({ children,cartCount,onSearch,changeTheme }) => {
  return (
    <div>
      <Header cartCount={cartCount} onSearch={onSearch} changeTheme={changeTheme}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
