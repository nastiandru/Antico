import React from 'react';
import ProductList from '../Content/ProductList/ProductList';
 import './Account.css';

 const products = [
  { id: 1, name: 'dfkfdj dkfj kdjfg',  price: 30 , image: 'img/produkt1.jpg' },
  { id: 2, name: 'dkrj kdjr ijr',  price: 80, image: 'img/produkt2.webp' },
  { id: 3, name: ' odjdj drorgo r',  price: 400, image: 'img/produkt3.jpg' },
  { id: 4, name: 'drjt idrj dj',  price: 120, image: 'img/produkt4.jpg' },
  { id: 5, name: 'drj idr drkj r',  price: 250, image: 'img/produkt5.jpg' },
  { id: 6, name: 'drj idrwefw drkj r',  price: 650, image: 'img/produkt5.jpg' }
];
 

function Account() {
  return (
    <div className="account">
      <div className="account-container">
        <h1>O mnie</h1>
        <div className="profile-info">
          <h2>Lokalizacja:</h2>
          <p>Zielona góra</p>
        </div>
        <div className="profile-info">
          <h2>Adres e-mail:</h2>
          <p>jan.kowalski@example.com</p>
        </div>
        <div className="profile-info">
          <h2>Numer telefonu:</h2>
          <p>+38********</p>
        </div>
        <div className="profile-info">
          <h2>Doświadczenie z antykami:</h2>
          <p></p>
        </div>
        </div>
        <div className="orders">
        <div className="buttons">
            <button className="account-button">Moje Ogłoszenia</button>
            <button className="account-button">Mój Koszyk</button>
            <button className="account-button selected">Wybrane</button>
          </div>
          <div className="productlist-wrapper">
        <ProductList products={products} />
      </div>
        </div>
      </div>
    
  );
}

export default Account;