import React from 'react';
import './Product.css';

function Product({ product }) {
  const { name, descriptionShort, descriptionLong, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{descriptionShort}</p>
        <p>Cena: {price}</p>
        <p>{descriptionLong}</p>
      </div>
    </div>
  );
}

export default Product;