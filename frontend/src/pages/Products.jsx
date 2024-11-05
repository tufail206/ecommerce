import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { useProducts } from "../context/product-context";
import { useFilterProducts } from "../context/Filter-context";

const Products = () => {
  const { isLoading, allProducts, isError } = useProducts();
  const { filter_products, filterDropDown, filterByCategory, searchProducts,filters:{text}, clearFilters } = useFilterProducts();
  const uniqueCategories = [...new Set(allProducts?.map(product => product.category)
  )];

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center">
        <h2 className="text-3xl">LOADING...</h2>
      </div>
    );
  }

  return (
    <section className="product-card-page py-8 bg-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="product-headers flex items-center justify-between py-4">
          <h2>
            <Link to="/">Home</Link> / Products page
          </h2>
        
          <h4>Total {filter_products?.length} Products</h4>

          <select
            className="p-2 border border-secondary outline-none bg-slate-100"
            onChange={filterDropDown}
          >
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
          </select>
        </div>

        <div className="product-content flex gap-4 py-8">
          <div className="product-filters-section flex flex-col gap-10 md:px-3 lg:px-0">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search items..."
          value={text}
                className="border border-secondary p-2 outline-none"
                onChange={searchProducts}
              />
            </form>
            <div>
              <h3 className="lg:text-xl">Filter by Category</h3>
              <div>
                {uniqueCategories.map((category, index) => (
                  <input
                    type="button"
                    key={index}
                    value={category}
                    className="block my-4 cursor-pointer hover:text-secondary"
                    onClick={() => filterByCategory(category)}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="lg:text-xl">Filter by Color</h3>
              {/* Add color filtering logic here if needed */}
            </div>
            <div
              className="lg:text-xl cursor-pointer text-red-600"
              onClick={clearFilters}
            >
              Clear Filters
            </div>
          </div>

          <div className={`product-cards flex justify-center items-center gap-6  flex-wrap`}>
            { 
              filter_products ? filter_products?.map((cardData, ind) => (<Card key={ind} {...cardData} />
              )):" you have no products"

            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
