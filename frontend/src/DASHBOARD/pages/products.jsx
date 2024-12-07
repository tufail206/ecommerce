import React, { useState } from 'react';
import { useAdmin } from '../../context/Admin-context';

const Products = () => {
  const { products, loading, error, GetAllProducts, deleteProduct, updateProduct } = useAdmin();
  const [editData, setEditData] = useState(null);

  const handleEdit = (product) => setEditData(product);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Product Management</h3>
      <button
        onClick={GetAllProducts}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 transition"
      >
        Refresh Products
      </button>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-3 text-left font-semibold">Product Name</th>
            <th className="p-3 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="p-3">{product.name}</td>
              <td className="p-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Product</h3>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditData(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  updateProduct(editData._id, editData);
                  setEditData(null);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
