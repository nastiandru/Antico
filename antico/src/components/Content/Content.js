import React from 'react';
import Category from './Category/Category';
import SearchBar from './SearchBar/SearchBar';
import Slider from './Slider/Slider';
import ProductList from './ProductList/ProductList';
import './Content.css';

function Content() {
  const products = [
    { id: 1, name: 'dfkfdj dkfj kdjfg',  price: 30 , image: 'img/produkt1.jpg' },
    { id: 2, name: 'dkrj kdjr ijr',  price: 80, image: 'img/produkt2.webp' },
    { id: 3, name: ' odjdj drorgo r',  price: 400, image: 'img/produkt3.jpg' },
    { id: 4, name: 'drjt idrj dj',  price: 120, image: 'img/produkt4.jpg' },
    { id: 5, name: 'drj idr drkj r',  price: 250, image: 'img/produkt5.jpg' },
    { id: 6, name: 'lsdkfj idr drkj r',  price: 550, image: 'img/produkt5.jpg' },
    { id: 7, name: '98udr drkj r',  price: 150, image: 'img/produkt4.jpg' }
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