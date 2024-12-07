import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className=" flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <h2 className="text-3xl font-bold text-center py-6 border-b border-gray-700">Admin Dashboard</h2>
        <nav className="mt-8 flex flex-col space-y-4">
          <NavLink
            to="user"
            className={({ isActive }) =>
              `px-6 py-3 text-lg hover:bg-gray-700 transition ${isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `px-6 py-3 text-lg hover:bg-gray-700 transition ${isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `px-6 py-3 text-lg hover:bg-gray-700 transition ${isActive ? 'bg-gray-700' : ''
              }`
            }
          >
            Products
          </NavLink>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
