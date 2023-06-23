import React from 'react';
import './Product.css';

function Product({ product }) {
  const { name, description, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <p>{price} zł</p>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;