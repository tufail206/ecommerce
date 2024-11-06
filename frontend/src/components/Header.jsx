import React, { useEffect, useState } from 'react'
import {  FaBars, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

import { useAuth } from '../context/Auth-context';
import { useCart } from '../context/Cart-context';
import { toast } from 'react-toastify';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const { isLoggedIn, loginUserData }=useAuth()
 
    const { cart } = useCart();
  return (
    <header className='header-section bg-primary shadow-bottom-only py-4 relative'>
        <div className='container mx-auto'>
          <div className="navbar flex justify-between items-center px-3 md:px-0">
            <div className='block md:hidden bars text-lg'>
                { isMenuOpen ? <IoMdClose onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='text-lg'/>: <FaBars onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='text-lg'/> }
               
                <ul className={`w-max mobile-ul ${isMenuOpen ? "flex":"hidden"} flex-col md:hidden items-center transition-all  gap-4 text-lg absolute top-[100%] left-0 bg-[#fffefe] p-6 shadow-sm`}>
              
                <li className="px-2" onClick={()=>{setIsMenuOpen(false)}} >
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li className="px-2" onClick={()=>{setIsMenuOpen(false)}}>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li className="px-2" onClick={()=>{setIsMenuOpen(false)}}>
                    <NavLink to={'/services'}>Services</NavLink>
                </li>
                <li className="px-2" onClick={()=>{setIsMenuOpen(false)}}>
                    <NavLink to={'/products'}>Prodcuts</NavLink>
                </li>
              
            </ul>
            </div>
        
            <div className="logo">
                      <h1 className='text-3xl font-semibold text-secondary'><NavLink to={'/'}>LOGO</NavLink></h1>
            </div>
            <ul className="desktop-ul hidden md:flex items-center gap-6 text-lg">
               
                      {loginUserData && loginUserData.isAdmin ? (
                          <li>
                              <NavLink to={'/admin'}>Admin</NavLink>
                          </li>
                      ) : null}
              
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={'/services'}>Services</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'}>Prodcuts</NavLink>
                </li>
            </ul>
            <ul className="social-icons flex items-center gap-6 text-lg">
              {isLoggedIn?  <li >
                          <NavLink to={'/logout'} onClick={() => toast.success("logout successfully")} >
                    Logout
                     </NavLink>
                    
                 
                </li>: <li >
                    <NavLink to={'/login'}  >
                     <FaUserCircle className={'text-lg'}/> </NavLink>
                    
                 
                </li>}
              
                <li className="relative">
  <NavLink to={'/cart'} className="relative inline-block">
    <FaShoppingCart className="text-lg" />
                              {cart.length>=1 && <div className="absolute -top-[10px] -right-2 bg-slate-900 text-white rounded-full p-1 text-xs w-5 h-5 flex items-center justify-center">
                                  {cart.length}
                              </div> }
   
  </NavLink>
</li>

            </ul>
          </div>

        </div>
    
    </header>
  )
}

export default Header
