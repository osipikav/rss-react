import React from 'react';
import './Header.css';

import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation';

function Header() {
  const location = useLocation();
  const currentRoute = location.pathname.substr(1);

  return (
    <header className="header">
      <h3 className="header-title"> {currentRoute}</h3>
      <Navigation />
    </header>
  );
}
export default Header;
