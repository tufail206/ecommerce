import React, { useState } from 'react'
import {  FaBars, FaShoppingCart, FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

import {} from "react-icons"
const Header = () => {
    let [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
    <header className='header-section bg-primary shadow-bottom-only py-4 relative'>
        <div className='container mx-auto'>
          <div className="navbar flex justify-between items-center px-3 md:px-0">
            <div className='block md:hidden bars text-lg'>
                { isMenuOpen ? <IoMdClose onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='text-lg'/>: <FaBars onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='text-lg'/> }
               
                <ul className={`w-max mobile-ul ${isMenuOpen ? "flex":"hidden"} flex-col md:hidden items-center transition-all  gap-4 text-lg absolute top-[100%] left-0 bg-[#fffefe] p-6 shadow-sm`}>
                <li className="px-2" onClick={()=>{setIsMenuOpen(false)}} >
                    <NavLink to={'/'}>Home</NavLink>
                </li>
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
                <h1 className='text-3xl font-semibold text-secondary'>LOGO</h1>
            </div>
            <ul className="desktop-ul hidden md:flex items-center gap-6 text-lg">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
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
                <li >
                    <NavLink to={'/login'} title='login' >
                     <FaUserCircle className={'text-lg'}/> </NavLink>
                    
                 
                </li>
                <li className="relative">
  <NavLink to={'/cart'} className="relative inline-block">
    <FaShoppingCart className="text-lg" />
    <div className="absolute -top-[10px] -right-2 bg-slate-900 text-white rounded-full p-1 text-xs w-5 h-5 flex items-center justify-center">
      0 {/* Update this number dynamically as needed */}
    </div>
  </NavLink>
</li>

            </ul>
          </div>

        </div>
    
    </header>
  )
}

export default Header
