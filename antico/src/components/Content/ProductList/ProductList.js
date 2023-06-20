import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-list">
      <div className="sidebar">
        {/* Вміст бокової колонки */}
      </div>
      <div className="main-content">
        {products && products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Ціна: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;