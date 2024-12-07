import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../context/product-context';
import { useCart } from '../context/Cart-context';
import GoogleMap from '../components/GoogleMap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { fetchProductDetails, singleProduct, isLoading } = useProducts();
  const [quantity, setQuantity] = useState(1);
  const { AddToCart } = useCart();

  // Fetch product details on mount or when `id` changes
  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  // Increment quantity but prevent exceeding stock
  const incrementQuantity = () => {
    if (quantity < singleProduct.stock) {
      setQuantity((prev) => prev + 1);
    } else {
      toast.warn("You've reached the maximum stock available.");
    }
  };

  // Decrement quantity but prevent going below 1
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle add-to-cart action
  const handleAddToCart = () => {
    AddToCart(quantity, singleProduct.price * quantity, singleProduct);
    toast.success("Item successfully added to cart");
  };

  // Loading and error handling
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!singleProduct || !singleProduct.name) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <p className="mb-4">
        <Link to="/">Home</Link> / {singleProduct.name}
      </p>

      <div className="product-details flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full h-[490px] object-cover rounded-md"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-2">{singleProduct.name}</h1>
          <p className="text-gray-700">{singleProduct.description}</p>
          <p className="text-lg font-semibold text-gray-500">Price: ${singleProduct.price}</p>
          <p className="text-sm text-gray-600">In Stock: {singleProduct.stock}</p>

          {/* Quantity Selector */}
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
              disabled={quantity >= singleProduct.stock}
              className="bg-gray-200 px-3 py-1 rounded-lg"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <p className="text-lg font-bold mt-3">Total Price: ${(singleProduct.price * quantity).toFixed(2)}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-secondary text-white py-3 px-6 mt-4 rounded-lg hover:bg-primary-dark"
          >
            Add to Cart
          </button>
          <Link to="/products" className="mt-4 text-primary hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Map Component */}
      <GoogleMap />
    </div>
  );
};

export default ProductDetails;
