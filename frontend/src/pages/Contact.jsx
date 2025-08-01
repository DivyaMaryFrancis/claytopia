import React from 'react';

const Contact = () => {
  return (
    <div className="w-4/5 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      
      <p className="text-lg mb-6 text-center">
        We'd love to hear from you! Whether you have questions about our products, custom order requests, or anything else — our inbox is always open.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Reach Us At</h2>
        <ul className="space-y-2">
          <li><strong>Email:</strong> hello@claytopia.in</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/claytopia" className="text-blue-600 underline">@claytopia</a></li>
        </ul>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
