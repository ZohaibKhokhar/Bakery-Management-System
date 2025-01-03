// Header.js
import React, { useState, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import MobileMenu from './MobileMenu';
import ThemeToggleButton from './ThemeToggleButton';

function Header({ cartCount, onSearch, changeTheme,theme }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerClass=`p-2 fixed top-0 w-full z-10 shadow-md ${theme==='light'?'bg-blue-500':'bg-blue-900'}`;

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((term) => {
      if (onSearch) onSearch(term);
    }, 300),
    [onSearch]
  );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='p-2 fixed top-0 w-full z-10 shadow-md bg-blue-900' >
      <div className="container-fluid mx-auto flex justify-between items-center" style={{padding:"3px 5px"}}>
        <Logo />
        <button onClick={toggleMobileMenu} className="text-white text-2xl md:hidden focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        <div className="hidden md:flex items-center ml-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} onSearch={onSearch} theme={theme}/>
        </div>
        <div className="hidden md:flex items-center ml-3">
          <ThemeToggleButton onClick={changeTheme} theme={theme}  />
        </div>
        <CartIcon cartCount={cartCount} />
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </nav>
  );
}

export default Header;
