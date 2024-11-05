// About.js

import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-4">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-primary mb-4">
            About Our Company
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We are passionate about providing quality products to our valued customers. With a commitment to excellence, we focus on delivering a range of items tailored to meet your needs. Our mission is to inspire and fulfill the demands of our customers with exceptional service and innovative solutions.
          </p>
          <button className="bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/path/to/your/image.jpg"
            alt="About Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="container mx-auto my-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To deliver outstanding products and create value for our customers by exceeding expectations in quality, service, and reliability.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become a globally recognized brand that offers unique products and exceptional customer experiences, setting the standard for excellence.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary mb-4">Our Values</h3>
            <ul className="list-disc ml-4 text-gray-700 space-y-2">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Focus</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto my-12 px-4 text-center">
        <h3 className="text-3xl font-bold text-primary mb-6">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/path/to/team-member1.jpg"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold">John Doe</h4>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="text-gray-700 mt-2">
              A visionary leader with a passion for excellence and innovation.
            </p>
          </div>
          {/* Additional team members can follow the same format */}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto my-12 px-4">
        <h3 className="text-3xl font-bold text-primary text-center mb-6">
          What Our Clients Say
        </h3>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Amazing products and fantastic customer service. Highly recommend!"
            </p>
            <p className="text-primary font-semibold">- Sarah L.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "A reliable company with top-quality products. I always shop here."
            </p>
            <p className="text-primary font-semibold">- James B.</p>
          </div>
          {/* More testimonials can be added as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
