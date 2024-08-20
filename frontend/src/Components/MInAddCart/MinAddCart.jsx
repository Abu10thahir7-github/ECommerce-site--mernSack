import React from 'react';
import { useSelector } from 'react-redux';
import './cate.css';
import { Link } from 'react-router-dom';

function MinCart() {
  const cartItems = useSelector((state) => state.cart.cartItems || []); // Ensure cartItems defaults to an empty array

  return (
    <div className='my-min-Cart'>
      <div className="min-cart-title">
        <h3>Your Cart</h3>
      </div>
      <div className="min-cart-items">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-items" key={item._id}>
              <img src={item.imageUrl} alt={item.Name} />
              <div className="items-con">
                <p className='min-cart-item-title'>{item.Name}</p>
                <p>$ {item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-checkOut">
         <Link to={'/Cart'}>
        <button>Check Out</button>
        </Link>
      </div>
    </div>
  );
}

export default MinCart;
