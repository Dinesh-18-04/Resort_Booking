import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LuxeStay</h2>
          <p className="text-gray-400">
            Discover luxury resorts, stunning beaches, and memorable getaways.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Resorts</li>
            <li className="hover:text-blue-400 cursor-pointer">Gallery</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 text-center pt-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} LuxeStay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
