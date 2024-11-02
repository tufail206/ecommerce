import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../context/product-context";
import { Link } from 'react-router-dom'
import { CgLayoutGrid } from "react-icons/cg";
import { BsList } from "react-icons/bs";
import Card from "../components/Card";
const Products = () => {
  let { allProducts, isLoading,
    isError } = useProducts()
  const uniqueCategories = [...new Set(allProducts.map(product => product.category))];
    if( isLoading){
      return <div className="w-full h-[80vh] flex items-center justify-center" ><h2 className="text-3xl">LOAIDNG...</h2>
      </div>
    } 
  return (
    <section className="prodcut-card-page py-8 bg-slate-100">
      <div className="container mx-auto ">
        <div className="prodcut-headers flex items-center justify-between  py-4">
          <h2> <Link to="/">Home</Link>/  Products page</h2>
          <div>
            <div className="flex items-center gap-3"> <BsList className="text-2xl shadow  cursor-pointer" />  <CgLayoutGrid className="text-2xl shadow cursor-pointer " />
            </div>
          </div>
          <h4>Total {allProducts.length} Products </h4>

          <select name="" id="" className="p-2 border border-secondary outline-none bg-slate-100">
            <option className="p-1" value="default">default</option>
            <option className="p-1" value="a-z">A-Z</option>
            <option className="p-1" value="a-z">Z-A</option>
            <option className="p-1" value="lowest">price(lowest)</option>
            <option className="p-1" value="lowest">price(highest)</option>
          </select>

        </div>
        <div className="product-content flex gap-4 py-8">
          <div className="prodcut-filters-section flex flex-col gap-10  md:px-3 lg:px-0">
            <form onSubmit={(e) => { e.preventDefault() }}>
              <input type="text" placeholder="search items..." className="border border-secondary p-2 outline-none" />

            </form>
            <div>
              <h3 className="lg:text-xl">Filter by Category</h3>
              <div className=" ">
              
                {
                   
                uniqueCategories.map((category, index) => (
                  <input
                    type="button"
                    key={index}
                    value={category}
                    className="block my-4 cursor-pointer hover:text-secondary"

                  />
                ))
                
                
                
                
                
                }
              </div>
          </div>
            <div>
              <h3 className="lg:text-xl"> filter by color </h3>
            </div>
            <div className="lg:text-xl">
              clear filter
            </div>
          </div>
          <div className="product-cards flex justify-center items-center  gap-6 flex-wrap">
            {allProducts?.map((cardData,ind)=>{
              return <Card key={ind} {...cardData}/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products



