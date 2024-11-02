// ProductDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/product-context';
import { useNavigate } from 'react-router-dom';
const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { fetchProductDetails, SingleProducts, isLoading } = useProducts();
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  let navigete = useNavigate()
  // Fetch product details when the component mounts or the ID changes
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  // Calculate the total price based on quantity and product price
  const totalPrice = SingleProducts.price * quantity;

  // Increase quantity
  const incrementQuantity = () => {
    if (quantity < SingleProducts.stock) { // Ensure stock limit
      setQuantity(prev => prev + 1);
    }
  };

  // Decrease quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Add to Cart function (stub)
  const handleAddToCart = () => {
    // Add logic to handle cart addition here
    console.log("Product added to cart:", SingleProducts, "Quantity:", quantity);
    alert(`${SingleProducts.name} added to cart`);
   
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!SingleProducts || !SingleProducts.name) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-3xl font-bold mb-4">{SingleProducts.name}</h1>
      <img
        src={SingleProducts.image}
        alt={SingleProducts.name}
        className="w-full h-64 object-cover rounded-md"
      />
      <p className="text-gray-700 mt-4">{SingleProducts.description}</p>
      <p className="text-gray-500">Category: {SingleProducts.category}</p>
      <p className="text-lg font-semibold">Price: ${SingleProducts.price}</p>
      <p className="text-sm text-gray-600">In Stock: {SingleProducts.stock}</p>
      <p className="text-sm text-gray-600">Sold: {SingleProducts.sold}</p>

      {/* Quantity and Total Price Section */}
      <div className="mt-6">
        <div className="flex items-center space-x-3">
          <button
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="bg-gray-200 px-3 py-1 rounded-lg"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={incrementQuantity}
            disabled={quantity >= SingleProducts.stock}
            className="bg-gray-200 px-3 py-1 rounded-lg"
          >
            +
          </button>
        </div>
        <p className="text-lg font-bold mt-3">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white py-2 px-6 mt-4 rounded-lg hover:bg-blue-700 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
