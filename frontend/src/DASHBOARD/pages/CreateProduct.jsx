import React, { useState } from "react";
import { useAdmin } from "../context/AdminProvider";

const CreateProductForm = () => {
  const { SetNewProduct, dispatch } = useAdmin();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "Mens",
    image: "",
    stock: 0,
    quantity: 0,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" }); // Start loading state
    await SetNewProduct(formData); // Call the provider function
    setFormData({ // Reset the form
      name: "",
      price: 0,
      category: "Mens",
      image: "",
      stock: 0,
      quantity: 0,
      description: "",
    });
  };

  return (
    <form className="w-full max-w-lg mx-auto bg-gray-100 p-6 shadow-lg rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Create New Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          {["Mens", "Women", "Shoes", "Dress", "Bed Room", "Hot Sale", "Office", "Living Room", "Dining Room"].map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="image">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          maxLength={500}
          className="w-full px-4 py-2 border rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
      >
        Create Product
      </button>
    </form>
  );
};

export default CreateProductForm;
