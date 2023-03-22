import SearchBar from '../../components/SearchBar/SearchBar';
import ProductsRender from '../../components/ProductsRender/ProductsRender';
import React from 'react';
import './HomePage.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h2>Home</h2>
        <div className="card-container">
          <ProductsRender />
        </div>
      </div>
    );
  }
}
