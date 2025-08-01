import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-700 py-8 mt-10 border-t border-gray-300">
<div className="w-full px-4 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About CLAYTOPIA */}
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-700">CLAYTOPIA</h2>
          <p className="text-sm">
            Handmade with love, our clay keychains and charms bring joy and uniqueness to your everyday life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-pink-600">Home</a></li>
            <li><a href="/shop" className="hover:text-pink-600">Shop</a></li>
            <li><a href="/about" className="hover:text-pink-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-600">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CLAYTOPIA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
