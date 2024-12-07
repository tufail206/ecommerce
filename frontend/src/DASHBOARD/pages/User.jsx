import React, { useEffect } from 'react';
import { useAdmin } from '../../context/Admin-context';
import { useAuth } from '../../context/Auth-context';

const Users = () => {
  const { users, loading, error, GetAllUser, deleteUser } = useAdmin();
  const { loginUserData } = useAuth();

  useEffect(() => {
    GetAllUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">User Management</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="p-3 text-left font-semibold">Name</th>
              <th className="p-3 text-left font-semibold">Email</th>
              <th className="p-3 text-left font-semibold">Role</th>
              <th className="p-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.isAdmin ? 'Admin' : 'User'}</td>
                <td className="p-3">
                  {user._id !== loginUserData.id && (
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
