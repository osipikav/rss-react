import SearchBar from '../../components/SearchBar/SearchBar';
import ProductsRender from '../../components/ProductsRender/ProductsRender';
import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <SearchBar />
      <h2>home</h2>
      <div className="card-container">
        <ProductsRender />
      </div>
    </div>
  );
}

export default HomePage;
