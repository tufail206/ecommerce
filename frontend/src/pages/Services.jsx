// components/Services.js
import React from 'react';


const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Our Services</h1>
          <p className="text-xl">Explore the wide range of services we offer to enhance your shopping experience.</p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Product Delivery</h3>
              <p className="text-gray-600">We ensure fast and reliable delivery of your purchased products, right to your door.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">Our support team is available 24/7 to assist you with any questions or issues you may have.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Secure Checkout</h3>
              <p className="text-gray-600">Enjoy a safe and secure shopping experience with our encrypted checkout system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Optional) */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Pricing Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
              <p className="text-gray-600">$20/month</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Access to basic features</li>
                <li>Standard delivery</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
              <p className="text-gray-600">$50/month</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Premium customer support</li>
                <li>Fast delivery</li>
                <li>Exclusive discounts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
              <p className="text-gray-600">$100/month</p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>All features included</li>
                <li>Priority delivery</li>
                <li>Custom support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Get Started Today!</h2>
          <p className="text-lg text-gray-700 mb-4">Join thousands of satisfied customers and take your shopping experience to the next level.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl">Start Shopping</button>
        </div>
      </section>
    </div>
  );
};




export default Services
