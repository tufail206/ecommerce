// components/Cart.js
import React from 'react';
import { useCart } from '../context/Cart-context';
import { useAuth } from '../context/Auth-context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, price, quantity, removeFromCart } = useCart();
  const { isLoggedIn } = useAuth()
  const navigate=useNavigate()
  let checkToProceed=()=>{
    if (isLoggedIn){
      return navigate('/')
    }else{
      toast.error("login required")
      return navigate('/login')
    }
  }
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center mb-4 border-b pb-4">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
               
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        <div>
              <div>  <h2 className="text-2xl font-bold mt-8">Total Amount: ${price.toFixed(2)}</h2>
                <h3 className="text-xl py-2">Total Items: {quantity}</h3></div>
              <button onClick={checkToProceed} className='bg-green-600 text-white px-4 py-2 rounded'> Check to proced</button>
        </div>
          
        </div>
      )}
    </div>
  );
};

export default Cart;
