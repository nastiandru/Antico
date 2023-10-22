import React from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';
import products from '../../products';

function Content() {

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