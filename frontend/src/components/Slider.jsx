import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <div className="relative overflow-hidden w-full">
      <Slider {...settings} className="w-full h-[450px] lg:h-[600px]">
        {[...Array(3).keys()].map((item) => (
          <div
            key={item}
            className="relative w-full bg-gray-300"  // Gray background applied here
          >
            <img
              src={`https://via.placeholder.com/1200x600?text=Banner+${item + 1}`}
              alt={`Banner ${item + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
                Welcome to Our Site
              </h1>
              <p className="text-white text-lg lg:text-2xl max-w-lg mx-auto">
                Discover amazing adventures and breathtaking views!
              </p>
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
