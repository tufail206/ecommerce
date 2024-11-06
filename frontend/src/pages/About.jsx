import React from 'react';
import TestimonialSlider from '../components/Testimonial';
const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Welcome to Our eCommerce Store</h1>
          <p className="text-xl">Your one-stop shop for all your needs. We provide quality products and exceptional service.</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            We started with a simple idea: make shopping online as easy, affordable, and enjoyable as possible.
            Our platform offers a wide range of products from top brands with quick delivery and excellent customer service.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Wide Range of Products</h3>
              <p className="text-gray-600">From electronics to fashion, we offer a vast selection of high-quality products.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Fast & Reliable Shipping</h3>
              <p className="text-gray-600">Get your products delivered to your doorstep quickly and safely.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Your privacy and payment details are safe with us, using top-notch encryption technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Mission & Vision</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to bring high-quality products to every home, and our vision is to be the go-to destination for all your online shopping needs.
          </p>
          <p className="text-lg text-gray-700">
            We aim to provide a seamless shopping experience that makes life easier for our customers, offering both convenience and great deals.
          </p>
        </div>
      </section>

      {/* Customer Testimonials */}
      <TestimonialSlider />
    </div>
  );
};


export default About;
