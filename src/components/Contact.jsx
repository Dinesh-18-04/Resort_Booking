import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ShineBorder } from "./magicui/shine-border";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <ShineBorder >helo</ShineBorder>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500" size={24} />
                <p className="text-gray-700">+91 8248855937</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500" size={24} />
                <p className="text-gray-700">contact@luxestay.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500" size={24} />
                <p className="text-gray-700">
                  123 Paradise Avenue, Bali, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
