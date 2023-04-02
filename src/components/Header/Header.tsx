import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  }, [location]);

  return (
    <header className="header">
      <h3 className="header-title"> {currentPath}</h3>
      <Navigation />
    </header>
  );
}

export default Header;
