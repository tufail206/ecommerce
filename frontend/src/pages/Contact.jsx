import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [contactUser, setContactUser] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can send this data to your backend here
    // Example: POST request to a backend API
    try {
      const response = await fetch('http://localhost:3000/api/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactUser)
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setContactUser({ fullName: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
     
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Us</h1>

        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Contact Information */}
          <div className="lg:w-1/3 bg-secondary text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">We’d love to hear from you! Send us a message and we’ll respond as soon as possible.</p>
            <div className="mt-4">
              <p className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  {/* SVG Path */}
                </svg>
                1234 Adventure Road, Mountain City
              </p>
              <p className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  {/* SVG Path */}
                </svg>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  {/* SVG Path */}
                </svg>
                contact@example.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={contactUser.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={contactUser.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={contactUser.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={contactUser.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Type your message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-secondaryHover transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
