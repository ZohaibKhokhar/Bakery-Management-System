import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import StayInTouch from '../Components/StayInTouch';
import CopyRight from '../Components/CopyRight';

const MainLayout = ({ children,cartCount,onSearch,changeTheme,theme }) => {
  return (
    <div>
      <Header cartCount={cartCount} onSearch={onSearch} changeTheme={changeTheme}/>
      <main>{children}</main>
      <StayInTouch theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
};

export default MainLayout;
