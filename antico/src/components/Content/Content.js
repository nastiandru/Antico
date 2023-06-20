import React from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';

function Content() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 5.99 },
  ];

  return (
    <div className="content-container">
      <div className="content-wrapper">
        <div className="category-wrapper">
          <Category />
        </div>
        <div className="searchbar-slider-wrapper">
          <div className="searchbar-wrapper">
            <SearchBar />
          </div>
          <div className="slider-wrapper">
            <Slider />
          </div>
        </div>
      </div>
      <div className="productlist-wrapper">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Content;