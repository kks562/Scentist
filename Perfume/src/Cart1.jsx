import React from 'react';
import { useCart } from './CartContext';
import './Cart1.css'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeCart } = useCart();

  const handleDelete = (index) => {
    removeCart(index);
  }
  const navigate=useNavigate();
  const productdetail=()=>{
    navigate('/');
  }
  const gotopayment=()=>{
    navigate('/payment');
  }

  return (
    <div className="cart-container">
      <ion-icon name="arrow-back" style={{ fontSize: '50px', position: 'absolute', left: '10px', top: '10px' }} onClick={productdetail}/>
      <h1 className="cart-title1">Cart</h1>
      <ion-icon name="cart-outline" style={{ fontSize: '45px', position: 'absolute', right: '650px', top: '10px' }} />
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} style={{ width: '400px', height: '400px' }} />
              <h2 style={{ position: 'relative', left: '130px', top: '30px' }}>{item.name}</h2>
              <p style={{ position: 'relative', left: '100px', top: '40px', fontSize: '30px', fontWeight: '700' }}>Price: {item.price}</p>
              <button onClick={gotopayment}className="btn1" >Checkout</button>
              <button onClick={() => handleDelete(index)} className="btn">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
