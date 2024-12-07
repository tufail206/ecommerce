import './App.css'
import { Routes, Route } from 'react-router-dom'
import ShardComp from './components/ShardComp'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Services from './pages/Services'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Logout from './pages/Logout'
import ProductDetails from './pages/ProductDetails'
import Protected from './pages/Protected'
import Deshboard from './DASHBOARD/pages/Deshboard'
import { ToastContainer } from 'react-toastify'
import User from './DASHBOARD/pages/User'
import Orders from './DASHBOARD/pages/Orders'
import AdminProducts from './DASHBOARD/pages/products'

function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='' element={<ShardComp />} >
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route
            path='/admin'
            element={<Protected><Deshboard /></Protected>}
          >
            <Route path='user' element={<User/>}  />
            <Route path='orders' element={<Orders/>} />
            <Route path='products' element={<AdminProducts />} />
            </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
