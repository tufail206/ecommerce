import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth-context.jsx'
import { ProductProvider } from './context/product-context.jsx'
import { FilterProvider } from './context/Filter-context.jsx'
import { CartProvider } from './context/Cart-context.jsx'
import { AdminProvider } from './context/Admin-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>

            <CartProvider>
              <AdminProvider>
                <App />
              </AdminProvider>
           
              </CartProvider>

          </FilterProvider>

        </ProductProvider>

      </AuthProvider>

    </BrowserRouter>

  </StrictMode>,
)
