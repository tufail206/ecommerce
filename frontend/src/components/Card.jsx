import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({_id, image, name, category, description, price, stock, sold }) => {
    return (
        <div className="card bg-[#fefefefb] shadow-lg rounded-lg p-4  md:w-[46%] lg:w-[30%] transition duration-300 ease-in-out transform hover:scale-105 ">
            {/* Card Image */}
            <div className="card-image overflow-hidden rounded-t-lg h-48 mb-4">
                <img
                    src={image || "https://via.placeholder.com/200x200?text=Product+Image"}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Card Details */}
            <div className="card-details px-2 py-2">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
                <p className="text-sm text-gray-500 mb-2">{category}</p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {description}
                </p>

                {/* Stock and Sold Info */}
                <div className="text-sm text-gray-500 mb-4">
                    <p>In Stock: {stock}</p>
                    <p>Sold: {sold}</p>
                </div>

                {/* Price and Action Button */}
                <div className="flex justify-between items-center">
                    <span className=" font-bold text-lg">${price}</span>
                    <Link to={`/product/${_id}`}> <button className=" text-white px-4 py-2 rounded-lg text-sm bg-secondary">
                        Add to Cart
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
