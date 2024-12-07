import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer shadow-lg py-8'>
      <div className='container mx-auto'>
        <div className='footer-data'>
           <ul className="footer-link flex flex-col gap-6">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/products'}>Products</Link>
            </li>
           </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
