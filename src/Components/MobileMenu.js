// MobileMenu.js
import React from 'react';
import NavLinks from './NavLinks';

function MobileMenu({ isOpen, toggleMobileMenu }) {
  return (
    isOpen && (
      <div className="absolute top-16 left-0 w-full bg-blue-500 md:hidden flex flex-col items-center">
        <NavLinks toggleMobileMenu={toggleMobileMenu} isMobile={true} />
      </div>
    )
  );
}

export default MobileMenu;
