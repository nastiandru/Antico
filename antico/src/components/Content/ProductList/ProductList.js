import React, {useState} from 'react';
import { useParams} from 'react-router-dom';
import Product from '../Product/Product';
import './ProductList.css';

function ProductList({products}) {
  // const {categoryName} = useParams();
  // const[products, setProducts] = useState([]);

  // fetch(`/api/products?category=${categoryName}`)
    //   .then(response => response.json())
    //   .then(data => setProductList(data));


  return (
    <div className="product-list">
      <div className="main-content">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;