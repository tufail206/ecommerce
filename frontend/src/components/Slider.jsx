import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      stopOnHover={true}
      swipeable={true}
    >
      <div className="relative">
        <img src="" alt="Slide 1" />
        <div className=" w-[40%] absolute top-[30%] left-[10%] text-white bg-opacity-50 px-2 py-1 rounded-md text-left">
          <p className='text-xl text-textPrimary'>Spring-Summer 2024</p>
          <h1 className='text-4xl font-bold text-black my-4'>WELCOME TO THE <br /> 
          <span className='text-secondary'>ECOM WORLD</span></h1>
          <p className='text-textPrimary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maiores, blanditiis ad reiciendis rem optio ea soluta a officiis aperiam quas, molestiae voluptate quis! Nemo doloribus suscipit deleniti dolorem nostrum.</p>
          <button className='btn border border-secondary px-4 py-2 text-black rounded my-4'>Shop Now</button>
        </div>
      </div>

      <div className="relative">
        <img src="" alt="Slide 2" />
        <div className=" w-[40%] absolute top-[30%] left-[10%] text-white bg-opacity-50 px-2 py-1 rounded-md text-left">
          <p className='text-xl text-textPrimary'>Spring-Summer 2024</p>
          <h1 className='text-4xl font-bold text-black my-4'>WELCOME TO THE <br /> 
          <span className='text-secondary'>ECOM WORLD</span></h1>
          <p className='text-textPrimary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maiores, blanditiis ad reiciendis rem optio ea soluta a officiis aperiam quas, molestiae voluptate quis! Nemo doloribus suscipit deleniti dolorem nostrum.</p>
          <button className='btn border border-secondary px-4 py-2 text-black rounded my-4'>Shop Now</button>
        </div>
      </div>

      <div className="relative">
        <img src="" alt="Slide 3" />
        <div className=" w-[40%] absolute top-[30%] left-[10%] text-white bg-opacity-50 px-2 py-1 rounded-md text-left">
          <p className='text-xl text-textPrimary'>Spring-Summer 2024</p>
          <h1 className='text-4xl font-bold text-black my-4'>WELCOME TO THE <br /> 
          <span className='text-secondary'>ECOM WORLD</span></h1>
          <p className='text-textPrimary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maiores, blanditiis ad reiciendis rem optio ea soluta a officiis aperiam quas, molestiae voluptate quis! Nemo doloribus suscipit deleniti dolorem nostrum.</p>
          <button className='btn border border-secondary px-4 py-2 text-black rounded my-4'>Shop Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
