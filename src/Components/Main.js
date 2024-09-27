import React, { useEffect, useState } from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Main() {
  // Step 1: Set up state to store products data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data); 
      })
      .catch(error => console.error('Error fetching the API:', error));
  }, []);

  // Step 3: Render the product cards dynamically
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="card-content">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <button className="add-cart-button">
              Add to Cart <span><FontAwesomeIcon icon={faShoppingCart} /></span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
