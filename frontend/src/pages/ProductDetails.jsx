import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../context/product-context';
import { useCart } from '../context/Cart-context';
import GoogleMap from '../components/GoogleMap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Include the styles
const ProductDetails = () => {
  const { id } = useParams();
  const { fetchProductDetails, SingleProducts, isLoading } = useProducts();
  const [quantity, setQuantity] = useState(1);
  const { AddToCart } = useCart()

  // Fetch product details when component mounts or id changes
  useEffect(() => {
    fetchProductDetails(id);
    
  }, [id]);

  const incrementQuantity = () => {
    if (quantity < SingleProducts.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCarts = () => {
    AddToCart(quantity, SingleProducts.price*quantity,SingleProducts )
    toast.success("This is a successfully add")
  };

  if (isLoading) {
    return <p>Loading...</p>; // Display loading message
  }

  if (!SingleProducts || !SingleProducts.name) {
    return <p>Product not found.</p>; // Show error if product data is missing
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <p className="mb-4">
        <Link to="/">Home</Link> / {SingleProducts.name}
      </p>

      <div className="product-details flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <img
            src={SingleProducts.image}
            alt={SingleProducts.name}
            className="w-full h-[490px] object-cover rounded-md"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{SingleProducts.name}</h1>
          <p className="text-gray-700">{SingleProducts.description}</p>
          <p className="text-lg font-semibold text-gray-500">Price: ${SingleProducts.price}</p>
          <p className="text-sm text-gray-600">In Stock: {SingleProducts.stock}</p>

          <div className="flex items-center gap-4 mt-6">
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
          <p className="text-lg font-bold mt-3">Total Price: ${(SingleProducts.price * quantity).toFixed(2)}</p>

          <button
            onClick={handleAddToCarts}
            className="bg-secondary text-white py-3 px-6 mt-4 rounded-lg hover:bg-primary-dark"
          >
            Add to Cart
          </button>
          <Link to="/products">Continue Shopping</Link>
        </div>
      </div>
      <GoogleMap />
    </div>
  );
};

export default ProductDetails;
