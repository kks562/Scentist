import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart,removeCart } = useCart(); 

  const handleDelete=(index)=>{
             removeCart(index);
  }

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
